import './cards.css'
import {Link} from 'react-router-dom'
export default function Cards({ name, type, img, attack, idkey }) {
    console.log(idkey)
    return (
        <div className="poke">
            <Link to={`/details/${idkey}`}>
                <div>
                    <h1>{name}</h1>
                </div>
            </Link>
            <img className='img' src={img} alt={name}></img>
            <div>types:
                {type && type.map((elemento) => (
                    typeof idkey === 'string' ?
                        <span key={elemento.id}> {elemento.name}</span>
                        : <span key={elemento}> {elemento}</span>))}
            </div>
        </div>
    )
}
