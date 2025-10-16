const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contacto = require('../../models/contacto.model'); // 👈 Importar el modelo

router.post('/', async (req, res) => {
  const {
    nombre,
    apellidos,
    movil,
    email,
    confirmarEmail,
    tipoConsulta,
    asunto,
    mensaje
  } = req.body;

  if (!nombre || !apellidos || !movil || !email || !confirmarEmail || !tipoConsulta || !asunto || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  if (email !== confirmarEmail) {
    return res.status(400).json({ error: 'Los emails no coinciden' });
  }

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

  try {
    // Enviar el correo
    await transporter.sendMail({
      from: `"${nombre} ${apellidos}" <${email}>`,
      to: 'iaznaran@hotmail.com',
      subject: `Formulario de contacto: ${asunto}`,
      html: contenido
    });

    // Guardar en base de datos
    await Contacto.create({
      nombre,
      apellidos,
      movil,
      email,
      tipoConsulta,
      asunto,
      mensaje
    });

    res.json({ message: 'Correo enviado y formulario guardado correctamente' });
  } catch (error) {
    console.error('Error al enviar correo o guardar en DB:', error);
    res.status(500).json({ error: 'Error al enviar el correo o guardar en base de datos' });
  }
});

module.exports = router;
