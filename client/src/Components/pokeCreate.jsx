import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postPokemon } from '../Actions';
import { Link } from 'react-router-dom';
// import Home from '../Home/Home';
// import './createPokemon.css'
// import {postPokemon} from '../../redux/action/index'


export default function CreatePokemon() {
    const types = useSelector((state) => state.types)

    const [input, setInput] = useState({
        id: uuidv4(),
        name: '',
        img: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: ''
    })
    const dispatch = useDispatch();

    function handleInputChange(e) {
        console.log(e.target.name)
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    function handleSelectChange(e) {
        e.preventDefault()
        var tipo = types.find((elemento) => elemento.name === e.target.value)
        setInput({
            ...input,
            types: tipo.id
        })
    }

    function handleForm(e) {
        e.preventDefault()
        console.log(input)
        dispatch(postPokemon(input))
        setInput({});
    }

    return (
        <div className='content-page-form'>
            <h1>Create your Pokemon!!</h1>
            <form onSubmit={(e) => handleForm(e)} className="content-form" action="">
                <input name='name' placeholder='Nombre' type="text" onChange={(e) => handleInputChange(e)} />
                <input name='hp' placeholder='HP' type="text" onChange={(e) => handleInputChange(e)} />
                <input name='attack' placeholder='Attack' type="text" onChange={(e) => handleInputChange(e)} />
                <input name='img' placeholder='Imagen' type="text" onChange={(e) => handleInputChange(e)} />
                <input name='defense' placeholder='Defense' type="text" onChange={(e) => handleInputChange(e)} />
                <input name='speed' placeholder='Speed' type="text" onChange={(e) => handleInputChange(e)} />
                <input name='height' placeholder='Height' type="text" onChange={(e) => handleInputChange(e)} />
                <input name='weight' placeholder='Weight' type="text" onChange={(e) => handleInputChange(e)} />
                <select name="types" onChange={(e) => handleSelectChange(e)}>
                    <option value='all'>All-types</option>
                    {types && types.map((type) => {
                        return (
                            <option
                                key={type.id}
                                value={type.name}>
                                {type.name}
                            </option>
                        );
                    })}
                </select>
                <input type="submit" value="Create" />
                <Link to='/home'>
                    <button>HOME</button>
                </Link>
            </form>
        </div>
    )
}