import { createContext, useState } from "react"

export const UsuariosContext = createContext()

export default function UsuariosProvider({ children }) {
    const [nomeCliente, setNomeCliente] = useState('')
    const [emailCliente, setEmailCliente] = useState('')
    const [passwordCliente, setPasswordCliente] = useState('')
    const [telefoneCliente, setTelefoneCliente] = useState('')

    const [nomeProfissional, setNomeProfissional] = useState('')
    const [emailProfissional, setEmailProfissional] = useState('')
    const [passwordProfissional, setPasswordProfissional] = useState('')
    const [telefoneProfissional, setTelefoneProfissional] = useState('')
    const [codigoRegional, setCodigoRegional] = useState('')

  return (
    <UsuariosContext.Provider
        value={{
            nomeCliente,
            setNomeCliente,
            emailCliente,
            setEmailCliente,
            passwordCliente,
            setPasswordCliente,
            telefoneCliente,
            setTelefoneCliente,
            nomeProfissional,
            setNomeProfissional,
            emailProfissional,
            setEmailProfissional,
            passwordProfissional,
            setPasswordProfissional,
            telefoneProfissional,
            setTelefoneProfissional,
            codigoRegional,
            setCodigoRegional
        }}
    >
        {children}
    </UsuariosContext.Provider>
  )
}
