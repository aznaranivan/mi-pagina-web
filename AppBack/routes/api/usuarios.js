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

router.get('/confirm-access', async (req, res) => {
    const { email, confirm } = req.query;

    if (confirm === 'yes') {
        await User.updateOne({ email }, { role: 'admin_confirmado' });
        res.send('✅ Acceso confirmado');
    } else {
        res.send('❌ Acceso rechazado');
    }
});

router.post('/', async (req, res) => {
    try{   
        const usuario = await Usuario.create(req.body);
        res.json(usuario);
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.put('/:usuarioId', async (req, res) => {
    const { usuarioId } = req.params;

    try{
        const usuario = await Usuario.findByIdAndUpdate(usuarioId, req.body, { new: 
        true });
        res.json(usuario);
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.delete('/:usuarioId', async (req, res) => {
    const { usuarioId } = req.params;

    try{
        const usuario = await Usuario.findByIdAndDelete(usuarioId);
        res.json(usuario);
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = router;
module.exports.create = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.json(usuario);
    } catch (error) {
        res.json({ error: error.message });
    }
};