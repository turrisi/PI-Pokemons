import { getByTypes, getPokemons } from "../Actions/index"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import img from '../Images/Loading2.gif'
import Paged from './Paged/paged'
import Cards from './Cards/cards'
import Card from './Card/card'
import './home.css'
import NavBar from './NavBar/navBar'
import { Link } from "react-router-dom";



export default function Home() {

    const pokes = useSelector((state) => state.allPokemons)
    const pokemon = useSelector((state) => state.pokemon)
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
                pokes={pokes.length ? pokes.length : []}
                pokePerPage={pokePerPage}
                paged={paged}
            />
            <div className="cards">
                { pokeGap.length > 0 ? pokeGap?.map((pokemon) => {
                    return (
                        <div>
                            {/* <Link to='/details'> */}
                                <Cards
                                    key={pokemon.id}
                                    idkey={pokemon.id}
                                    name={pokemon.name}
                                    type={pokemon.types}
                                    attack={pokemon.attack}
                                    img={pokemon.img}
                                />
                            {/* </Link> */}
                        </div>
                    )
                }) : <div><img src={img} alt='pikaGif' className="load" /></div>}
            </div>
        </div>
    )
}
