export default function Cards({ name, type, img, attack,idkey}) {
    return (
        <div>
            <div>
                <h1>{name}</h1>
            </div>
            <img src={img} alt= {name}></img>
            <div>types:
                {type && type.map((elemento) => (
                    typeof idkey === 'string'?
                    <span key={elemento.id}> {elemento.name}</span>
                :<span key={elemento}> {elemento}</span>))}
            </div>
            <div>Attack: {attack}</div>
        </div>
    )
}
