import { Link } from 'react-router-dom'
import './Header.css'
import '../../reset.css'

const Header = () => {

    return (
        <header>
            <img className='header-logo' src='/img/Logo.png' />
            <div className='menu'>
                <Link className='menu-link' to="/Home">Home</Link>
                <Link className='menu-link' to="/Login">Login</Link>
                <Link className='menu-link' to="/Cadastro">Cadastro</Link>
                <Link className='menu-link' to="/Consultas">Consultas</Link>
            </div>
        </header>
    )
}

export default Header