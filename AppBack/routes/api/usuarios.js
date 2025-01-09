const router = require('express').Router();

const Usuario = require('../../models/usuario.model');

router.get('/', async (req, res) => {
    try{
        const usuarios = await Usuario.find();
        res.json(usuarios);
    }catch (error) {
        res.json({ error: error.message });
    }
});

router.get('/:usuarioId', async (req, res)=> {
    const { usuarioId } = req.params;

    const usuario = await Usuario.findById(usuarioId);
    res.json(usuario);

});

module.exports = router;