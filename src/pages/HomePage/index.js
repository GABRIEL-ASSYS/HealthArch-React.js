import Header from 'components/Header'
import Footer from 'components/Footer'
import Home from 'components/Home'
import Contato from 'components/Contato'
import styles from './HomePage.module.css'

export default function HomePage () {
    return (
        <div className={styles.containerHomePage}>
            <Home />
            <Contato />
        </div>
    )
}