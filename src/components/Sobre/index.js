import 'reset.css'
import styles from './Sobre.module.css'
import sobreData from './sobre.json'

export default function Sobre() {

    return (
        <ul className={styles.listaSobre}>
            {sobreData.sobre.map((item, index) => (
                <li className={styles.itemListaSobre} key={index}>
                    <h2 className={styles.tituloItemListaSobre}>{item.titulo}</h2>
                    <p className={styles.textoItemListaSobre}>{item.texto}</p>
                    <img 
                        className={styles.imagemItemListaSobre}
                        src={item.imagem.src}
                        alt={item.imagem.alt}
                    />
                </li>
            ))}
        </ul>
    )
}