const axios = require ('axios')
const {Types} = require ('./src/db')

/* load types from api and charge them in the DB */

const dbReloadTypes = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type")
    await data.results.map((e) => Types.findOrCreate({
        where: { name: e.name }
    })
    )
}
module.exports ={dbReloadTypes}