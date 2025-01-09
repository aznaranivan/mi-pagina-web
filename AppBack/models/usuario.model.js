const{ model, Schema} = require('mongoose');

const usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    peso: Number,
    edad: Number,
    altura: Number
});

module.exports = model('usuario', usuarioSchema);