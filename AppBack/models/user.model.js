const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: 'regular' // o 'admin_pendiente', 'admin_confirmado'
  }
});

module.exports = model('User', userSchema);