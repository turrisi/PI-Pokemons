import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postPokemon } from '../Actions';
import { Link } from 'react-router-dom';
import './PokeCreate/PokeCreate.css'

export default function CreatePokemon() {
    const types = useSelector((state) => state.types)
    const [errors, setError]= useSelector({})

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
    var ok

    function handleInputChange(e) {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
    // const [error, setError] = useState(false)
    // {error?<p>This value must be a number</p>:null}
    function handleSelectChange(e) {
        e.preventDefault()
        if (e.target.value != 'all') {
            ok = true
            var tipo = types.find((elemento) => elemento.name === e.target.value)
            setInput({
                ...input,
                types: tipo.id
            })
        }
        else {
            ok = false
        }

    }

    function handleForm(e) {
        e.preventDefault()
        dispatch(postPokemon(input))
        setInput('');
    }

    return (
        <div className='wall'>
            <Link to='/home'>
                <button className='close'>X</button>
            </Link>
            <h1 className='title'>Create your Pokemon!!</h1>
            <form onSubmit={(e) => handleForm(e)} className="content" action="">
                <label className='labels1'>Name</label>
                <input className='name' name='name' placeholder='Name' type="text" onChange={(e) => handleInputChange(e)} />
                <label className='labels2'>Health power</label>
                <input className='hp' name='hp' placeholder='Health power' type="text" onChange={(e) => handleInputChange(e)} />
                <label className='labels3'>Attack</label>
                <input className='attack' name='attack' placeholder='Attack' type="text" onChange={(e) => handleInputChange(e)} />
                <label className='labels4'>Image</label>
                <input className='img' name='img' placeholder='Image' type="text" onChange={(e) => handleInputChange(e)} />
                <label className='labels5'>Defense</label>
                <input className='defense' name='defense' placeholder='Defense' type="text" onChange={(e) => handleInputChange(e)} />
                <label className='labels6'>Speed</label>
                <input className='speed' name='speed' placeholder='Speed' type="text" onChange={(e) => handleInputChange(e)} />
                <label className='labels7'>Height</label>
                <input className='height' name='height' placeholder='Height' type="text" onChange={(e) => handleInputChange(e)} />
                <label className='labels8'>Weight</label>
                <input className='weight' name='weight' placeholder='Weight' type="text" onChange={(e) => handleInputChange(e)} />
                <label className='labels9'>Types</label>
                <select className='types' name="types" onChange={(e) => handleSelectChange(e)}>
                    <option value='all'>Choose type</option>
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
                <input className='create' type="submit" value="Create" />
            </form>
        </div>
    )
}