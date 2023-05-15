import 'reset.css'
import styles from './Contato.module.css'
import contatoData from './contato.json'

export default function Contato() {
    const { contato } = contatoData

    return (
        <div className={styles.containerContato}>
            <h2 className={styles.tituloContato}>{contato.titulo}</h2>
            {contato.itensContato.map((item, index) => (
                <h3 className={styles.itemContato} key={index}>
                    {item.tipo}: {item.valor}
                </h3>
            ))}
            <iframe
                className={styles.contatoMapa}
                title='mapaCampoReal'
                src={contato.mapaSrc}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}