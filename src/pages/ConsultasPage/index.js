import Header from "components/Header";
import Consultas from "components/Consultas";
import Footer from "components/Footer";
import styles from './ConsultasPage.module.css'

export default function ConsultasPage() {
    return (
        <div className={styles.containerConsultasPage}>
            <Consultas />
        </div>
    )
}