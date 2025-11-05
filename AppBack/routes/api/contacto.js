const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contacto = require('../../models/contacto.model'); // Modelo de Mongoose

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

  // Validaciones básicas
  if (!nombre || !apellidos || !movil || !email || !confirmarEmail || !tipoConsulta || !asunto || !mensaje) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  if (email !== confirmarEmail) {
    return res.status(400).json({ error: 'Los emails no coinciden' });
  }

  // Contenido del correo
  const contenido = `
    <h3>Nuevo mensaje de atención al cliente</h3>
    <p><strong>Nombre:</strong> ${nombre} ${apellidos}</p>
    <p><strong>Móvil:</strong> ${movil}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Tipo de Consulta:</strong> ${tipoConsulta}</p>
    <p><strong>Asunto:</strong> ${asunto}</p>
    <p><strong>Mensaje:</strong><br>${mensaje}</p>
  `;

  // Configurar transporter de Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // tu Gmail
      pass: process.env.GMAIL_PASS  // contraseña o app password
    }
  });

  // Enviar correo
  transporter.sendMail({
    from: `"Aznaran Web" <${process.env.GMAIL_USER}>`, // tu Gmail
    to: 'serviciosgc@hotmail.com',                     // correo de destino
    replyTo: email,                                   // responde al usuario
    subject: `Formulario de contacto: ${asunto}`,
    html: contenido
  }, (err, info) => {
    if (err) {
      console.error("Error enviando correo:", err);
      return res.status(500).json({ error: 'Error al enviar el correo' });
    } else {
      console.log("Correo enviado:", info);

      // Guardar en base de datos solo si el correo se envió
      Contacto.create({
        nombre,
        apellidos,
        movil,
        email,
        tipoConsulta,
        asunto,
        mensaje
      }).then(() => {
        res.json({ message: 'Correo enviado y formulario guardado correctamente' });
      }).catch(dbErr => {
        console.error("Error guardando en DB:", dbErr);
        res.status(500).json({ error: 'Error al guardar en la base de datos' });
      });
    }
  });
});

module.exports = router;
