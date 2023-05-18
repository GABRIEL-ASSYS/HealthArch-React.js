import 'reset.css'
import { useParams } from 'react-router-dom'
import styles from './EditarConsulta.module.css'
import { useConsultas } from 'contexts/Consultas'
import BotaoPadrao from 'components/BotaoPadrao'
import ConsultaNaoEncontrada from 'components/ConsultaNaoEncontrada'

export default function EditarConsulta() {
  const { idConsulta } = useParams()
  const { consultas, editarConsultas } = useConsultas()
  const consulta = consultas.find(consulta => consulta.id === idConsulta)

  if (!consulta) {
    return <ConsultaNaoEncontrada />
  }

  const salvarEdicao = () => {
    editarConsultas(consulta.id, {
      titulo: consulta.titulo,
      descricao: consulta.descricao,
      horaData: consulta.horaData,
      nomeCliente: consulta.nomeCliente,
      nomeProfissional: consulta.nomeProfissional
    })
  }

  return (
    <div className={styles.backgroundConsulta}>
      <div className={styles.consultaContainer}>
        <h2 className={styles.consultaTitulo}>Consulta:</h2>
        <label className={styles.labelConsulta}>Título:</label>
        <input
          className={styles.inputConsulta}
          placeholder='Digite o título da Consulta'
          value={consulta.titulo}
          onChange={(titulo) => consulta.setTitulo(titulo.target.value)}
        />
        <br />
        <label className={styles.labelConsulta}>Descrição:</label>
        <input
          className={styles.inputConsulta}
          placeholder='Digite a descrição da Consulta'
          value={consulta.descricao}
          onChange={(descricao) => consulta.setDescricao(descricao.target.value)}
        />
        <br />
        <label className={styles.labelConsulta}>Data e Hora:</label>
        <input
          className={styles.inputConsulta}
          type='time'
          value={consulta.horaData}
          onChange={(horaData) => consulta.setHoraData(horaData.target.value)}
        />
        <br />
        <label className={styles.labelConsulta}>Nome do Cliente:</label>
        <input
          className={styles.inputConsulta}
          placeholder='Digite o nome do cliente'
          value={consulta.nomeCliente}
          onChange={(nomeCliente) => consulta.setNomeCliente(nomeCliente.target.value)}
        />
        <br />
        <label className={styles.labelConsulta}>Nome do Profissional:</label>
        <input
          className={styles.inputConsulta}
          placeholder='Digite o nome do profissional'
          value={consulta.nomeProfissional}
          onChange={(nomeProfissional) => consulta.setNomeCliente(nomeProfissional.target.value)}
        />
        <br />

        <BotaoPadrao texto='Salvar' onClick={salvarEdicao} />
      </div>
    </div>
  )
}
