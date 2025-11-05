// 📦 Dependencias principales
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
require('./config/db'); // conexión a MongoDB

// 🚀 Inicializar la app
const app = express();

// 🧩 Middlewares globales
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 🛠️ Rutas de la API (importante que estén antes que Angular)
app.use('/api', require('./routes/api'));

// 📂 Servir los archivos del frontend Angular
const angularPath = path.join(__dirname, 'public', 'browser');
app.use(express.static(angularPath));

// ⚙️ Redirigir cualquier otra ruta al index.html de Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(angularPath, 'index.html'));
});

// 🎧 Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
