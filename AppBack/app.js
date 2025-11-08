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

// 🛠️ Rutas de la API
app.use('/api', require('./routes/api'));

// 🧪 Endpoint de prueba rápido
app.get('/api/test', (req, res) => {
  res.json({ ok: true });
});

// 📂 Servir Angular
const angularPath = path.join(__dirname, 'public/browser');
app.use(express.static(angularPath));

// ⚙️ Catch-all para Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(angularPath, 'index.html'));
});


// 🎧 Puerto de escucha (Render asigna el puerto automáticamente)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
