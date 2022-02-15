import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterByTypes, getByName, sort } from "../../Actions/index";
import Create from "../pokeCreate";


export default function NavBar({ setCurrentPage, types }) {

    const dispatch = useDispatch();
    const [input, setInput] = useState('')

    function handleInputChange(e) {
        e.preventDefault();
        setInput(e.target.value);
    }
    const searcher = async (e) => {
        e.preventDefault();
        dispatch(getByName(input));
        setCurrentPage(1)
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

    return (
        <div>
            <form onSubmit={(e) => searcher(e)}>
                <input /*value="Choose your pokemon!"*/
                    name="search"
                    type="text"
                    onChange={(e) => handleInputChange(e)}
                />
                <button type="submit">search</button>

                <select name="type" onChange={e => handleSelectChange(e)}>
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
                    <select name="order" onChange={e => handleSelectChange(e)}>
                        <option value="any">Select order</option>
                        <option value="nameAscendant">Ascenant by name</option>
                        <option value="nameDescendant">Descendant by name</option>
                        <option value="strAscendant">Ascendant by Strength</option>
                        <option value="strDescendant">Descendant by strength</option>
                    </select>
                </div>
                <div>
                    <Link to='/create'>
                        <button>Create pokemon</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}