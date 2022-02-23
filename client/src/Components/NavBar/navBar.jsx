import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterByTypes, getByName, sort } from "../../Actions/index";
import './NavBar.css'
import img from '../../Images/pikaGif.gif'


export default function NavBar({ setCurrentPage, types }) {

    const dispatch = useDispatch();
    const [input, setInput] = useState('')

    function handleInputChange(e) {
        e.preventDefault();
        setInput(e.target.value);
 
    }
    const searcher = async (e) => {
        e.preventDefault();
        setCurrentPage(1)
        dispatch(getByName(input));
        setInput('')
    }
    const handleSelectChange = async (e) => {
        e.preventDefault();
        switch (e.target.value) {
            case 'all': {
                dispatch(filterByTypes("all"))
            }
                break
            case 'nameAscendant': {
                dispatch(sort("nameAscendant"))
                break
            }
            case 'nameDescendant': {
                dispatch(sort("nameDescendant"))
                break
            }
            case 'strAscendant': {
                dispatch(sort("strAscendant"))
                break
            }
            case 'strDescendant': {
                dispatch(sort("strDescendant"))
                break
            }
            default: dispatch(filterByTypes(e.target.value))
        }
        setCurrentPage(1)
    }
    console.log(input)
    return (
        <div>
            <form className='nav' onSubmit={(e) => searcher(e)}>
                <label className="lab1">Find your pokemon!</label>
                <input className="in" name="search" type="text" value={input}
                    onChange={(e) => handleInputChange(e)}
                />
                 <button className='but1' type="submit">Go find it now!</button>
                <label className="lab2">Select your favorite Type!</label>
                <select className="sel" name="type" onChange={e => handleSelectChange(e)}>
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
                <div>
                    <label className="lab3">Arrange your pokemons!</label>
                    <select name="order" onChange={e => handleSelectChange(e)}>
                        <option value="any">Select order</option>
                        <option value="nameAscendant">Ascenant by name</option>
                        <option value="nameDescendant">Descendant by name</option>
                        <option value="strAscendant">Ascendant by Strength</option>
                        <option value="strDescendant">Descendant by strength</option>
                    </select>
                </div>
                <div className="space1"></div>
                <label className="lab4">Wanna reate a pokemon of your own?</label>
                <Link to='/create'>
                    <button className="cre">GO!</button>
                </Link>
                <img src={img} alt='pikaGif' className="pikadance" />
            </form>
        </div>
    )
}