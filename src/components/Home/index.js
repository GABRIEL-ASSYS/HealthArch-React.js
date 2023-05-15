import 'reset.css'
import styles from './Home.module.css'
import homeData from './home.json'

export default function Home() {

    return (
            <ul className={styles.listaHome}>
                {homeData.home.map((item, index) => (
                    <li className={styles.itemListaHome} key={index}>
                        <h2 className={styles.tituloItemListaHome}>{item.titulo}</h2>
                        <p className={styles.textoItemListaHome}>{item.texto}</p>
                        {item.imagem && (
                            <img className={styles.imagemItemListaHome} src={item.imagem.src} alt={item.imagem.alt}/>
                        )}
                        {item.videoSrc && (
                            <iframe 
                                className={styles.videoHome}
                                src={item.videoSrc}
                                title='Youtube video player'
                                frameBorder="O"
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            />
                        )}
                    </li>
                ))}
            </ul>
    )
}