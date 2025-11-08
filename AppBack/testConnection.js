const axios = require('axios');

// Datos de prueba para enviar al backend
const datos = {
  nombre: "Iván",
  apellidos: "Aznar",
  movil: "123456789",
  email: "ivan@example.com",
  confirmarEmail: "ivan@example.com",
  tipoConsulta: "Mantenimiento",
  asunto: "Prueba",
  mensaje: "Este es un mensaje de prueba que tiene más de diez palabras.",
  privacidad: true
};

// Cambia la URL según quieras probar local o producción
const URL = 'https://mi-backend.onrender.com/api/contacto';

// const URL = 'https://mi-backend.onrender.com/api/contacto';

axios.post(URL, datos)
  .then(res => {
    console.log('✅ Respuesta del backend:', res.data);
  })
  .catch(err => {
    console.error(
      '❌ Error al conectar con backend:', 
      err.response?.status, 
      err.response?.data || err.message
    );
  });
