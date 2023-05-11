import 'reset.css'
import styles from './Sobre.module.css'
import ideia from './imagens/ideia.jpg'
import objetivos from './imagens/objetivos.jpg'
import metas from './imagens/metas.jpg'
import area from './imagens/area.jpg'
import compromisso from './imagens/compromisso.jpg'

export default function Sobre() {

    return (
        <ul className={styles.listaSobre}>
            <li className={styles.itemListaSobre}>
                <h2 className={styles.tituloItemListaSobre}>De onde surgiu a ideia?</h2>
                <p className={styles.textoItemListaSobre}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A ideia surgiu de uma necessidade de universitários de
                 odontologia em administrar melhor os horários de seus pacientes, seu material e remédios, sendo assim 
                 percebida uma oportunidade de melhoria e otimização na administração de consultórios ou clínicas. A ideia
                 inicial era apenas uma aplicação que gerenciasse os horários dos pacientes,  porém com o tempo, novas ideias
                 foram surgindo, algumas  já foram implementadas e outros ainda serão implementadas no futuro.</p>
                <img className={styles.imagemItemListaSobre} src={ideia} alt='Imagem de uma lâmpada'/>
            </li>
            <li className={styles.itemListaSobre}>
                <h2 className={styles.tituloItemListaSobre}>Quais os objetivos para o futuro?</h2>
                <p className={styles.textoItemListaSobre}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Um dos mariores objetivos da HealthaArch é melhorar o
                atendimento a pacientes na área de saúde em geral, aproximando o paciente e o profissional, tornando assim
                uma área mais humana. Também temos oobjetivo de auxiliar os profissionais em sua formação, tanto em cursos
                técnicos, quanto em cursos de nível superior, para que o formando possa ter mais facilidade em sua formação.</p>
                <img
                    className={styles.imagemItemListaSobre}
                    src={objetivos}
                    alt='Imagem com um gráfico de subida e um boneco atirando de arco e flecha em um alvo que outro homem está segurando.'
                />
            </li>
            <li className={styles.itemListaSobre}>
                <h2 className={styles.tituloItemListaSobre}>Metas</h2>
                <p className={styles.textoItemListaSobre}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A principal meta da HealthArch é tornar a área da saúde 
                uma área tecnológica e automatizada com uma aplicação que auxilie os profissionais da saúde, temos a meta de
                aumentar nosso número de usuários, primeiramente no estado do Paraná e em seguida ampliar o nosso atendimento
                a região sul e em seguida alcançar o âmbito nacional. Pretendemos também montar uma boa equipe de desenvolvimento,
                com Design, Marketing, Front-end e Back-end bem estabelecidos, para que possamos trabalhar em melhorias e 
                desenvolver de forma cada vez melhor e mais eficiente nossa aplicação.</p>
                <img
                    className={styles.imagemItemListaSobre}
                    src={metas}
                    alt='Imagem de uma prancheta com um papel com uma lista de coisas e um lápis ao lado da prancheta.'
                />
            </li>
            <li className={styles.itemListaSobre}>
                <h2 className={styles.tituloItemListaSobre}>Àrea de atuação</h2>
                <p className={styles.textoItemListaSobre}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nossa área de atuação é a saúde em geral, consultórios e clínicas,
                podendo atender médicos de qualquer área ou especialização, fisioterapeutas, dentistas, nutricionistas, psicólogos,
                etc. E também estaremos disponibilizando o acesso a recepcionistas, para que possam organizar e fazer o
                manejo dos horários dos pacientes, agendamento de exames e receitas passadas pelos profissionais, também
                tendo acesso ao cadastro do cliente, endereço, contato e informações  pessoais.</p>
                <img
                    className={styles.imagemItemListaSobre}
                    src={area}
                    alt='Quatro profissionais vestidos de jaleco, sorrindo, um deles segurando uma prancheta e o outro segurando uma imagem de raio x.'
                />
            </li>
            <li className={styles.itemListaSobre}>
                <h2 className={styles.tituloItemListaSobre}>Compromissos</h2>
                <p className={styles.textoItemListaSobre}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nosso principal compromisso é de trazer uma melhor qualidade de vida,
                por meio da saúde, facilitando a administração de consultórios e clínicas e também auxiliando os profissionais
                que estejam mais ligados a tecnologia e inovação, podendo assim utiliza-los no desenvolvimento de sua profissão
                e carreira.</p>
                <img
                    className={styles.imagemItemListaSobre}
                    src={compromisso}
                    alt='Imagem de dois homens de terno apertando as mãos.'
                />
            </li>
        </ul>
    )
}