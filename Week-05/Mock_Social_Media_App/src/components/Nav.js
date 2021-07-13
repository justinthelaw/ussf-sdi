import { Link } from 'react-router-dom'
import '../styles/nav.css'

export default function Nav() {
    return (
        <div>
            <nav>
                <img className="logo" src="https://i.ibb.co/rtW4ScL/logo.png" alt='JJK Logo' />
                <ul>
                    <li>
                        <Link className="link" exact to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" exact to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="link" exact to="/profiles">Profiles</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}