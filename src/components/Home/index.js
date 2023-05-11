import 'reset.css'
import styles from './Home.module.css'
import clinica from './imagens/imagem-clinica.jpeg'

export default function Home() {

    return (
            <ul className={styles.listaHome}>
                <li className={styles.itemListaHome}>
                    <h2 className={styles.tituloItemListaHome}>Gostaria de otimizar algumas funções administrativas de seu consultório ?</h2>
                    <p className={styles.textoItemListaHome}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Já pensou que algumas funções administrativas de seu consultório
                        ou clínica podem ser otimizadas, economizando assim tempo e recursos, sem falar em uma maior
                        agilidade. A HealthArch pensou em algumas formas de facilitar o trabalho dos profissionais
                        da área da saúde, médicos, dentistas, nutricionistas, psicólogos, recepcionistas, clientes,
                        etc. Já pensou em facilitar a forma de agendar horários, prescrever receitas e ter um contato
                        maior com os pacientes? Se sua resposta for sim, venha conosco transformar a saúde em uma área
                        mais automatizada e tecnológica.</p>
                    <img className={styles.imagemItemListaHome} src={clinica} alt='Imagem de uma clínica' />
                </li>
                <li className={styles.itemListaHome}>
                    <h2 className={styles.tituloItemListaHome}>Quais as vantagens de utilizar o HealthArch ?</h2>
                    <p className={styles.textoItemListaHome}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As principais vantagens de utilizar a HealthArch são, ter um contato maior
                        com seus pacientes, podendo entrar em contato mais facilmente, acompanhar como anda a recuperação
                        e o uso dos remédios, a HealthArch também oferece uma maior facilidade para agendamento de consultas
                        e manejo de horários, sendo que o próprio paciente pode cancelar a consulta. Também oferecemos um
                        controle de estoque para remédios e insumos, para que o profissional possa entender as necessidades
                        de suprimentos de sua clínica ou consultório.
                    </p>
                </li>
                <li className={styles.itemListaHome}>
                    <h2 className={styles.tituloItemListaHome}>Àrea da saúde - uma inovação social:</h2>
                    <iframe
                        className={styles.videoHome}
                        src='https://www.youtube.com/embed/FLBgkGEmoR0'
                        title='Youtube video player'
                        frameBorder="0"
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' />
                </li>
            </ul>
    )
}