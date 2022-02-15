import './Landing.css'
import { Link } from 'react-router-dom'


export default function Landing() {
    return (
        <div >
            <div className='bien'>
                <Link to='/home'>
                    <button className='but'>GO CATCH'EM ALL!</button>
                </Link>
            </div>
        </div>
    )
}
