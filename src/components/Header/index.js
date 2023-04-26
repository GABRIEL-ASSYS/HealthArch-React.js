import { Link } from 'react-router-dom'
import './Header.css'
import '../../reset.css'
import logo from './Logo.png'

const Header = () => {

    return (
        <header>
            <img className='header-logo' alt='logo' src={logo} />
            <div className='menu'>
                <Link className='menu-link' to="/HomePage">Home</Link>
                <Link className='menu-link' to="/LoginPage">Login</Link>
                <Link className='menu-link' to="/ConsultasPage">Consultas</Link>
                <Link className='menu-link' to="/SobrePage">Sobre</Link>
            </div>
        </header>
    )
}

export default Header