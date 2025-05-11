const router = require('express').Router();
const { checkToken } = require('../utils/middlewares');

const usuariosRouter = require('./api/usuarios');
const usersRouter = require('./api/users');
const contactoRouter = require('./api/contacto'); // ✅ importar correctamente

router.post('/usuarios', usuariosRouter.create);
router.use('/usuarios', checkToken, usuariosRouter);
router.use('/users', usersRouter);
router.use('/contacto', contactoRouter); // ✅ aquí registras la ruta

module.exports = router;
