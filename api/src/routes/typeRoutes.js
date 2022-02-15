const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const { getTypesDB } = require('../controllers/typeControllers');

router.get('/', async (req, res) => {
	let types = await getTypesDB();
	types.length
		? res.send(types)
		: res.status(400).send('Los tipos no pudieron obtenerse correctamente');
});



module.exports = router;