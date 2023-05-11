import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import 'reset.css'
import logo from './Logo.png'

export default function Header() {

    return (
        <header className={styles.cabecalhoContainer}>
            <img className={styles.cabecalhoLogo} alt='Logo da Health Arch' src={logo} />
            <div className={styles.menu}>
                <Link className={styles.menuLink} to="/HomePage">Home</Link>
                <Link className={styles.menuLink} to="/LoginPage">Login</Link>
                <Link className={styles.menuLink} to="/ConsultasPage">Consultas</Link>
                <Link className={styles.menuLink} to="/SobrePage">Sobre</Link>
            </div>
        </header>
    )
}