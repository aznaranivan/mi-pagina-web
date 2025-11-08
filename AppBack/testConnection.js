const axios = require('axios');

axios.post('http://localhost:3000/api/contacto', {
  nombre: "Ivan",
  apellidos: "Aznaran",
  movil: "666666666",
  email: "ejemplo@gmail.com",
  confirmarEmail: "ejemplo@gmail.com",
  tipoConsulta: "EficienciaEnergetica",
  asunto: "Prueba",
  mensaje: "Este es un mensaje de prueba que tiene más de diez palabras.",
  privacidad: true
}).then(res => console.log('✅ Respuesta del backend:', res.data))
  .catch(err => console.error('❌ Error:', err.response?.status, err.response?.data || err.message));
