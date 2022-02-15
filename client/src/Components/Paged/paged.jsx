export default function Paged({ pokePerPage, paged, pokes }) {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(pokes / pokePerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div >
            <div>
                {pageNumber && pageNumber.map(n => (
                        <p onClick={() => paged(n)} key={n}> {n} </p>
                ))
                }
            </div>
        </div>
    )
}