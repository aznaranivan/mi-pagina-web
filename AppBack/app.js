const express = require('express');

require('dotenv').config();
require('./config/db')

const app = express();

// Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET /api/usuarios
// GET /api/usuarios/USUARIOID
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})