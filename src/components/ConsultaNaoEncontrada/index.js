import 'reset.css'
import styles from './ConsultaNaoEncontrada.module.css'

export default function ConsultaNaoEncontrada() {
    return (
        <div className={styles.containerNaoEncontrada}>
            <h1 className={styles.tituloNaoEncontrada}>Ops!</h1>
            <p className={styles.textoNaoEncontrada}>Esta consulta não existe ou não foi encontrada, clique no botão Home para voltar para a página principal ou no botão Consultas para voltar para suas consultas.</p>
            <img className={styles.imagemNaoEncontrada} src='' alt='' />
        </div>
    )
}
