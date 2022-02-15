const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const {
	getAllPokemons,
	getPokemonDetails,
	postPokemon,
} = require('../controllers/pokemonControllers');


router.get('/', async (req, res) => {
	try {
		const { name } = req.query;
		const poke = await getAllPokemons(name);
		poke
			? res.status(200).send(poke)
			: res.status(404).send(['No existe un pokemon con el nombre: ' + name]);
	} catch (error) {
		console.log(error)
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	let poke = await getPokemonDetails(id);
	poke
		? res.status(200).send(poke)
		: res.status(404).send('No existe un pokemon con el id: ' + id);
});

router.post('/', postPokemon);

module.exports = router;