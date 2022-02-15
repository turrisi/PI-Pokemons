const {
	getPokemonApi,
	getPokemonDB,
	pokeFilterByName,
	getPokemonApiByID,
	getPokemonDbByID,
} = require('../helpers');

const { Pokemon, Types } = require('../db');

const getAllPokemons = async (name) => {
	try {
		const [api, db] = await Promise.all([getPokemonApi(), getPokemonDB()]);
		const allPoke = [...db,...api];
		if (name) {
			let prueba = await pokeFilterByName(allPoke, name);
			return prueba;
		}
		return allPoke;
	} catch (error) {
		console.log(error)
	}
};

const getPokemonDetails = async (id) => {
	let poke = null;
	if (id.length < 10) {
		poke = await getPokemonApiByID(id);
	} else {
		poke = await getPokemonDbByID(id);
	}
	return poke;
};


const postPokemon = async (req, res) => {
	const { name, id, img, hp, attack, defense, speed, height, weight, types } = req.body;
	try {
		const pokemonCreated = await Pokemon.create({
			name, id, img, hp, attack, defense, speed, height, weight
		})
		await pokemonCreated.addTypes(types)
		res.send("pokemon succesfully created")
	} catch (error) {
		console.log(error)
	}
}



module.exports = {
	getAllPokemons,
	getPokemonDetails,
	postPokemon,
};