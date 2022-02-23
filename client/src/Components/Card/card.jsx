import { useParams } from "react-router"
import { useDispatch, useSelector, useStore } from 'react-redux'
import { getPokeId } from "../../Actions"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Card() {
    const { id } = useParams()
    const dispatch = useDispatch()
    var pokeDetail = useSelector(state => state.pokemon)
    useEffect(() => {
        dispatch(getPokeId(id))
    }, [dispatch])
    // console.log(useStore().getState().pokemon)
    pokeDetail = pokeDetail.length? pokeDetail[0]:pokeDetail
    console.log(pokeDetail)
    return (
        <div className="poke">
            <Link to='/home'>
                <button className="button">Go back</button>
            </Link>
            <div>
                <h1>{pokeDetail.name}</h1>
            </div>
            {console.log(pokeDetail.types)}
            <img className='img' src={pokeDetail.img} alt={pokeDetail.name}></img>
            <div>types:
                {pokeDetail.types && pokeDetail.types.map((elemento) => (
                    // typeof pokeDetail.id === 'string' ?
                    //     <span key={elemento.id}> {elemento.name}</span>
                         <span key={elemento}> {elemento}</span>))}
            </div>
            <div><h2>Stats:</h2>
                <h3>Hp: {pokeDetail.hp}</h3>
                <h3>Attack: {pokeDetail.attack}</h3>
                <h3>Defense: {pokeDetail.defense}</h3>
                <h3>Speed: {pokeDetail.speed}</h3>
                <h3>height: {pokeDetail.height}</h3>
                <h3>weight: {pokeDetail.weight}</h3>
            </div>
        </div>
    )
}