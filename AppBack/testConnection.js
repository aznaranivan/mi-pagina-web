require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB Atlas correctamente');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error al conectar con MongoDB Atlas:', err);
    process.exit(1);
  });
