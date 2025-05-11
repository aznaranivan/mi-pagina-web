const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user.model');

// POST /api/users/register
router.post('/register', async (req, res) => {

    try{
        req.body.password = bcrypt.hashSync(req.body.password, 12);

        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.json({ error: error.message });
    }

});
// POST /api/users/login
router.post('/login', async (req, res) => {
    //Comprobar email
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return res.json({ error: 'Error en email/contraseña' });
    }

    const eq = bcrypt.compareSync(req.body.password, user.password);
    if (!eq) {
        return res.json({ error: 'Error en email/contraseña' });
    }

    res.json({ 
        sucess: 'Login correcto',
        token: createToken(user) });
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.json({ error: 'Usuario no encontrado' });

    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordValid) return res.json({ error: 'Contraseña incorrecta' });

    if (user.email.endsWith('@fitnesspro.com') && user.role !== 'admin_confirmado') {
        // Simulación de correo (puedes usar nodemailer en producción)
        const confirmLinkYes = `http://localhost:3000/api/users/confirm-access?email=${encodeURIComponent(user.email)}&confirm=yes`;
        const confirmLinkNo = `http://localhost:3000/api/users/confirm-access?email=${encodeURIComponent(user.email)}&confirm=no`;

        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'TUCORREO@gmail.com',
                pass: 'TUPASSWORD'
            }
        });

        await transporter.sendMail({
            from: user.email,
            to: 'aznaranivan41@gmail.com',
            subject: 'Confirmación de acceso de administrador',
            html: `<p>${user.email} quiere acceder como administrador.</p>
                   <a href="${confirmLinkYes}">✅ Confirmar acceso</a><br>
                   <a href="${confirmLinkNo}">❌ Rechazar acceso</a>`
        });

        return res.json({ error: 'Confirmación pendiente del administrador' });
    }

    // Generar token si está todo ok
    const token = jwt.sign({ userId: user._id }, 'secreto', { expiresIn: '1h' });
    res.json({ token });
});

function createToken(user) {
    const payload = {
        user_id: user._id,
        user_role: user.role
    }
    return jwt.sign(payload, 'autorizado')
}

module.exports = router;