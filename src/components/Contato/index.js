import 'reset.css'
import styles from './Contato.module.css'

export default function Contato() {

    return (
        <div className={styles.containerContato}>
            <h2 className={styles.tituloContato}>Fale conosco:</h2>
            <h3 className={styles.itemContato}>E-mail: contato@HealthArch.com.br</h3>
            <h3 className={styles.itemContato}>Telefone: (42)99999-9999</h3>
            <h3 className={styles.itemContato}>Venha nos fazer uma visita:</h3>
            <iframe
                className={styles.contatoMapa}
                title='mapaCampoReal'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7208.050354136493!2d-51.46951960734864!
                3d-25.4039781878216!2m3!1f0!2f0!3f0!3m2!1i024!2i768!4f13.1!3m3!1m2!1s0x94ef462cdc2f72fb%3A0xbe73a2
                c1e8973c98!2sCentro%20Universit%C3%A1rio%20Campo%20Real!5e0!3m2!spt-BR!2sbr!4v1662986268022!5m2!1s
                pt-BR!2sbr'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}