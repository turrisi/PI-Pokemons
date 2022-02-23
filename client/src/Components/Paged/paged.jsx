import './paged.css'
export default function Paged({ pokePerPage, paged, pokes }) {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(pokes / pokePerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div >
            <div className="page" >
                {pageNumber && pageNumber.map(n => (
                    <>
                        <span onClick={() => paged(n)} key={n} className= 'item'>  {n}  </span>
                    </>
                ))
                }
            </div>
        </div>
    )
}