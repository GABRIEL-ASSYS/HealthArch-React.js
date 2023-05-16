import Header from "components/Header"
import Footer from "components/Footer"
import Sobre from "components/Sobre"
import styles from './SobrePage.module.css'

export default function SobrePage () {
    return (
        <div className={styles.containerSobrePage}>
            <Sobre />
        </div>
    )
}