import { getByTypes, getPokemons } from "../Actions/index"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import img from '../Images/loadingGif.gif'
import Paged from './Paged/paged'
import Cards from './Cards/cards'
import './home.css'
import NavBar from './NavBar/navBar'



export default function Home() {

    const pokes = useSelector((state) => state.allPokemons)
    const types = useSelector((state) => state.types)
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [pokePerPage] = useState(12); //Set max amount of pokes in each page
    const lastPoke = currentPage * pokePerPage;
    const firstPoke = lastPoke - pokePerPage;
    const pokeGap = pokes.slice(firstPoke, lastPoke);
    const paged = (number) => {
        setCurrentPage(number)
    }
    useEffect(() => {
        dispatch(getPokemons())
        dispatch(getByTypes())
    }, [dispatch])

    return (
        <div>
            <NavBar
                types={types}
                setCurrentPage={setCurrentPage}
            />
            <Paged
                pokes={pokes.length?pokes.length:[]}
                pokePerPage={pokePerPage}
                paged={paged}
            />
            <div>
                { pokeGap.length>0 ? pokeGap?.map((pokemon) => {
                    return (
                        <Cards
                            key={pokemon.id}
                            idkey={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.types}
                            attack = {pokemon.attack}
                            img={pokemon.img}
                        />
                    )
                }) : <p>Loading ...<img src={img} alt='pikaGif' className="load" /></p>}
            </div>
            )
        </div>
    )
}
