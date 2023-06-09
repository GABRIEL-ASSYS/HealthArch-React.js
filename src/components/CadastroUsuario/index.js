import BotaoPadrao from 'components/BotaoPadrao'
import styles from './CadastroUsuario.module.css'
import { useContext, useState } from 'react'
import { UsuariosContext } from 'contexts/Usuarios'

export default function CadastroUsuario() {
  const [tipoCadastro, setTipoCadastro] = useState('Cliente')

  const {
    cadastroCliente,
    cadastroProfissional,
    novoUsuarioCliente,
    novoUsuarioProfissional
  } = useContext(UsuariosContext)

  return (
    <div className={styles.containerCadastros}>

      <select
        className={styles.selectCadastro}
        value={tipoCadastro}
        onChange={(tipoCadastro) => setTipoCadastro(tipoCadastro.target.value)}
      >
        <option
          className={styles.optionCadastro}
          value='Cliente'
        >Cliente</option>
        <option
          className={styles.optionCadastro}
          value='Profissional'
        >Profissional</option>
      </select>

      {tipoCadastro === 'Cliente' && (
        <div className={styles.cadastro}>
          <h2 className={styles.tituloCadastro}>Cadastrar como Cliente</h2>
          <label className={styles.labelCadastro}>Nome:</label>
          <input
            className={styles.inputCadastro}
            placeholder='Digite seu nome'
            value={nomeCliente}
            onChange={(nomeCliente) => setNomeCliente(nomeCliente.target.value)}
          />
          <br />
          <label className={styles.labelCadastro}>Email:</label>
          <input
            className={styles.inputCadastro}
            placeholder='Digite seu email'
            type='email'
            value={emailCliente}
            onChange={(emailCliente) => setEmailCliente(emailCliente.target.value)}
          />
          <br />
          <label className={styles.labelCadastro}>Senha:</label>
          <input
            className={styles.inputCadastro}
            placeholder='Digite sua senha'
            type='password'
            value={passwordCliente}
            onChange={(passwordCliente) => setPasswordCliente(passwordCliente.target.value)}
          />
          <br />
          <label className={styles.labelCadastro}>Telefone:</label>
          <input
            className={styles.inputCadastro}
            placeholder='Digite seu numero de telefone'
            type='tel'
            value={telefoneCliente}
            onChange={(telefoneCliente) => setTelefoneCliente(telefoneCliente.target.value)}
          />

          <BotaoPadrao texto='Cadastrar' onClick={novoUsuarioCliente} />
        </div>
      )}
      {tipoCadastro === 'Profissional' && (
        <div className={styles.cadastro}>
          <h2 className={styles.tituloCadastro}>Cadastrar como Profissional</h2>
          <label className={styles.labelCadastro}>Nome:</label>
          <input
            className={styles.inputCadastro}
            placeholder='Digite seu nome'
            value={nomeProfissional}
            onChange={(nomeProfissional) => setNomeProfissional(nomeProfissional.target.value)}
          />
          <br />
          <label className={styles.labelCadastro}>Email:</label>
          <input
            className={styles.inputCadastro}
            placeholder='Digite seu email'
            type='email'
            value={emailProfissional}
            onChange={(emailProfissional) => setEmailProfissional(emailProfissional.target.value)}
          />
          <br />
          <label className={styles.labelCadastro}>Senha:</label>
          <input
            className={styles.inputCadastro}
            placeholder='Digite sua senha'
            type='password'
            value={passwordProfissional}
            onChange={(passwordProfissional) => setPasswordProfissional(passwordProfissional.target.value)}
          />
          <br />
          <label className={styles.labelCadastro}>Telefone:</label>
          <input
            className={styles.inputCadastro}
            placeholder='Digite seu numero de telefone'
            type='tel'
            value={telefoneProfissional}
            onChange={(telefoneProfissional) => setTelefoneProfissional(telefoneProfissional.target.value)}
          />
          <br />
          <label className={styles.labelCadastro}>Código Regional:</label>
          <input
            className={styles.inputCadastro}
            placeholder='Digite seu código regional'
            value={codigoRegional}
            onChange={(codigoRegional) => setCodigoRegional(codigoRegional.target.value)}
          />

          <BotaoPadrao texto='Cadastrar' onClick={novoUsuarioCliente} />
        </div>
      )}
    </div>
  )
}
