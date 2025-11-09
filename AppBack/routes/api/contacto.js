const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contacto = require('../../models/contacto.model');

router.post('/', async (req, res) => {
  console.log("📬 Llega un POST a /api/contacto:", req.body);

  try {
    const { nombre, apellidos, movil, email, confirmarEmail, tipoConsulta, asunto, mensaje } = req.body;

    // Validaciones
    if (!nombre || !apellidos || !movil || !email || !confirmarEmail || !tipoConsulta || !asunto || !mensaje) {
      console.log("❌ Faltan campos:", req.body);
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    if (email !== confirmarEmail) {
      console.log("❌ Emails no coinciden:", email, confirmarEmail);
      return res.status(400).json({ error: 'Los emails no coinciden' });
    }

    // Configurar transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    const contenido = `
      <h3>Nuevo mensaje de atención al cliente</h3>
      <p><strong>Nombre:</strong> ${nombre} ${apellidos}</p>
      <p><strong>Móvil:</strong> ${movil}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Tipo de Consulta:</strong> ${tipoConsulta}</p>
      <p><strong>Asunto:</strong> ${asunto}</p>
      <p><strong>Mensaje:</strong><br>${mensaje}</p>
    `;

    transporter.sendMail({
      from: `"Aznaran Web" <${process.env.GMAIL_USER}>`,
      to: 'serviciosgc@hotmail.com',
      replyTo: email,
      subject: `Formulario de contacto: ${asunto}`,
      html: contenido
    }, async (err, info) => {
      if (err) {
        console.error("❌ Error enviando correo:", err);
        return res.status(500).json({ error: 'Error al enviar el correo', details: err.message });
      }

      console.log("✅ Correo enviado:", info.response);

      try {
        await Contacto.create({ nombre, apellidos, movil, email, tipoConsulta, asunto, mensaje });
        console.log("✅ Formulario guardado en DB");
        res.json({ message: 'Correo enviado y formulario guardado correctamente' });
      } catch (dbErr) {
        console.error("❌ Error guardando en DB:", dbErr);
        res.status(500).json({ error: 'Error al guardar en la base de datos', details: dbErr.message });
      }
    });

  } catch (err) {
    console.error("❌ Error inesperado:", err);
    res.status(500).json({ error: 'Error interno en el servidor', details: err.message });
  }
});

module.exports = router;
