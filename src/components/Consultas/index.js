import 'reset.css'
import styles from './Consultas.module.css'
import BotaoPadrao from 'components/BotaoPadrao'
import { useConsultas } from 'contexts/Consultas'
import { Link } from 'react-router-dom'

export default function Consultas() {

    const {
        consultas,
        adicionarConsulta,
        buscaConsulta,
        excluirConsulta,
    } = useConsultas()

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [hora, setHora] = useState('')

    return (
        <div className={styles.background}>
            <div className={styles.consultas}>
                <h2 className={styles.listaBuscaConsulta__titulo}>Consultas:</h2>
                <label className={styles.labelFormulario}>Título:</label>
                <input
                    className={styles.inputFormulario}
                    placeholder='Digite o título da Consulta'
                    value={titulo}
                    onChange={(titulo) => setTitulo(titulo.target.value)}
                />
                <br />
                <label className={styles.labelFormulario}>Descrição:</label>
                <input
                    className={styles.inputFormulario}
                    placeholder='Digite a descrição da Consulta'
                    value={descricao}
                    onChange={(descricao) => setDescricao(descricao.target.value)}
                />
                <br />
                <label className={styles.labelFormulario}>Hora:</label>
                <input
                    className={styles.inputFormulario}
                    type='time'
                    value={hora}
                    onChange={(hora) => setHora(hora.target.value)}
                />
                <br />

                <BotaoPadrao texto='Cadastrar' onClick={adicionarConsulta} />
                <BotaoPadrao texto='Buscar Consulta' onClick={buscaConsulta} />
            </div>
            <div className={styles.consultas}>
                <ul>
                    {consultas.map((consulta) => {
                        return (
                            <li key={consulta.id} className={styles.listaBuscaConsulta__item}>
                                <span className={styles.listaBuscaConsulta__span}>ID: {consulta.id}</span>
                                <br />
                                <span className={styles.listaBuscaConsulta__span}>Título: {consulta.titulo}</span>
                                <br />
                                <span className={styles.listaBuscaConsulta__span}>Descrção: {consulta.descricao}</span>
                                <br />
                                <span className={styles.listaBuscaConsulta__span}>Hora: {consulta.hora}</span>
                                <br />

                                <BotaoPadrao texto='Excluir' onClick={() => excluirConsulta(consulta.id)} />
                                <Link className={styles.linkEditarConsulta} to={`/EditarConsulta/${consulta.id}`}>Editar</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}