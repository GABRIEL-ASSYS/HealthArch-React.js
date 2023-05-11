import Footer from 'components/Footer'
import Header from 'components/Header'
import styles from './NaoEncontrada.module.css'
import 'reset.css'

export default function NaoEncontrada() {
    return (
        <>
            <Header />
            <div className={styles.containerNaoEncontrada}>
                <h1 className={styles.tituloNaoEncontrada}>Ops!</h1>
                <p className={styles.textoNaoEncontrada}>Esta página não existe, clique no botão Home para voltar para a página principal.</p>
                <img className={styles.imagemNaoEncontrada} src='' alt='' />
            </div>
            <Footer />
        </>
    )
}
