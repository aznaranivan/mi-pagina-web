const express = require('express');
const cors = require('cors');
const path = require('path'); // 🔹 nuevo

require('dotenv').config();
require('./config/db');

const app = express();

// Config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas API
app.use('/api', require('./routes/api'));

// Servir los archivos estáticos desde la carpeta 'public/browser'
app.use(express.static(path.join(__dirname, 'public', 'browser')));

// Redirigir todas las rutas al index.html de Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'browser', 'index.html'));
});


// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
