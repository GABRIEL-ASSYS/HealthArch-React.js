import 'reset.css'
import styles from './Consultas.module.css'
import BotaoPadrao from 'components/BotaoPadrao'
import { useConsultas } from 'contexts/Consultas'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Consultas() {

    const {
        consultas,
        adicionarConsulta,
        buscaConsulta,
        excluirConsulta,
    } = useConsultas()

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [horaData, setHoraData] = useState('')
    const [nomeCliente, setNomeCliente] = useState('')
    const [nomeProfissional, setNomeProfissional] = useState('')

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
                <label className={styles.labelFormulario}>Data e Hora:</label>
                <input
                    className={styles.inputFormulario}
                    type='datetime-local'
                    value={horaData}
                    onChange={(horaData) => setHoraData(horaData.target.value)}
                />
                <br />
                <label className={styles.labelFormulario}>Nome do Cliente:</label>
                <input
                    className={styles.inputFormulario}
                    placeholder='Digite o nome do cliente'
                    value={nomeCliente}
                    onChange={(nomeCliente) => setNomeCliente(nomeCliente.target.value)}
                />
                <br />
                <label className={styles.labelFormulario}>Nome do Profissional:</label>
                <input
                    className={styles.inputFormulario}
                    placeholder='Digite o nome do profissional'
                    value={nomeProfissional}
                    onChange={(nomeProfissional) => setNomeProfissional(nomeProfissional.target.value)}
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
                                <span className={styles.listaBuscaConsulta__span}>Data e Hora: {consulta.horaData}</span>
                                <br />
                                <span className={styles.listaBuscaConsulta__span}>Nome do Cliente: {consulta.nomeCliente}</span>
                                <br />
                                <span className={styles.listaBuscaConsulta__span}>Nome do Profissional: {consulta.nomeProfissional}</span>
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