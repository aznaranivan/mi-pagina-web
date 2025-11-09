const express = require('express');
const router = express.Router();
const { Resend } = require('resend');
const Contacto = require('../../models/contacto.model');

// Inicializar Resend con tu clave del entorno
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  console.log("📬 Llega un POST a /api/contacto:", req.body);

  try {
    const { nombre, apellidos, movil, email, confirmarEmail, tipoConsulta, asunto, mensaje } = req.body;

    // ✅ Validaciones
    if (!nombre || !apellidos || !movil || !email || !confirmarEmail || !tipoConsulta || !asunto || !mensaje) {
      console.log("❌ Faltan campos:", req.body);
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    if (email !== confirmarEmail) {
      console.log("❌ Emails no coinciden:", email, confirmarEmail);
      return res.status(400).json({ error: 'Los emails no coinciden' });
    }

    // ✅ Contenido del correo
    const contenido = `
      <h3>Nuevo mensaje de atención al cliente</h3>
      <p><strong>Nombre:</strong> ${nombre} ${apellidos}</p>
      <p><strong>Móvil:</strong> ${movil}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Tipo de Consulta:</strong> ${tipoConsulta}</p>
      <p><strong>Asunto:</strong> ${asunto}</p>
      <p><strong>Mensaje:</strong><br>${mensaje}</p>
    `;

    console.log("📧 Enviando correo a serviciosgc@hotmail.com...");

    // ✅ Enviar correo con Resend
    const { data, error } = await resend.emails.send({
      from: 'Aznaran Web <onboarding@resend.dev>', // puedes personalizar esto
      to: 'serviciosgc@hotmail.com',
      reply_to: email,
      subject: `Formulario de contacto: ${asunto}`,
      html: contenido
    });

    if (error) {
      console.error("❌ Error al enviar correo:", error);
      return res.status(500).json({ error: 'Error al enviar correo', details: error.message });
    }

    console.log("✅ Correo enviado correctamente, ID:", data?.id || '(sin ID)');

    // ✅ Guardar el formulario en MongoDB
    try {
      await Contacto.create({ nombre, apellidos, movil, email, tipoConsulta, asunto, mensaje });
      console.log("✅ Formulario guardado en DB");
      res.json({ message: 'Correo enviado y formulario guardado correctamente' });
    } catch (dbErr) {
      console.error("❌ Error guardando en DB:", dbErr);
      res.status(500).json({ error: 'Error al guardar en la base de datos', details: dbErr.message });
    }

  } catch (err) {
    console.error("❌ Error inesperado:", err);
    res.status(500).json({ error: 'Error interno en el servidor', details: err.message });
  }
});

module.exports = router;
