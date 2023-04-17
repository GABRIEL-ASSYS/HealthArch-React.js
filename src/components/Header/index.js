import { Link } from 'react-router-dom'
import './Header.css'
import '../../reset.css'

const Header = () => {

    return (
        <header>
            <img className='header-logo' alt='logo' src='./Logo.png' />
            <div className='menu'>
                <Link className='menu-link' to="/LoginPage">Login</Link>
                <Link className='menu-link' to="/ConsultasPage">Consultas</Link>
            </div>
        </header>
    )
}

export default Header