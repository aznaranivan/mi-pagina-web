const { model, Schema } = require('mongoose');

const contactoSchema = new Schema({
  nombre: String,
  apellidos: String,
  movil: String,
  email: String,
  tipoConsulta: String,
  asunto: String,
  mensaje: String,
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('Contacto', contactoSchema);
