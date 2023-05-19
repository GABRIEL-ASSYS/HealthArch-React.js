import { createContext, useMemo, useState } from "react"

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

    const [cadastroCliente, setCadastroCliente] = useState([])
    const [cadastroProfissional, setCadastroProfissional] = useState([])

    const valorUsuarioCliente = useMemo(
        () => ({
            cadastroCliente,
            novoUsuarioCliente,
            editarUsuarioCliente
        }),
        [cadastroCliente]
    )

    const valorUsuarioProfissional = useMemo(
        () => ({
            cadastroProfissional,
            novoUsuarioProfissional,
            editarUsuarioProfissional
        }),
        [cadastroProfissional]
    )

    async function novoUsuarioCliente() {
        await addDoc(collection(db, "cadastroCliente"),
            {
                nome: nomeCliente,
                email: emailCliente,
                password: passwordCliente,
                telefone: telefoneCliente,
            })
            .then(() => {
                console.log("Usuario cadastrado com sucesso!")
                setNomeCliente('')
                setEmailCliente('')
                setPasswordCliente('')
                setTelefoneCliente('')
            })
            .catch((error) => {
                console.log("Erro ao cadastrar usuario:" + error)
            })
    }

    async function novoUsuarioProfissional() {
        await addDoc(collection(db, "cadastroProfissional"),
            {
                nome: nomeProfissional,
                email: emailProfissional,
                password: passwordProfissional,
                telefone: telefoneProfissional,
                codigoRegional: codigoRegional
            })
            .then(() => {
                console.log("Usuario cadastrado com sucesso!")
                setNomeProfissional('')
                setEmailProfissional('')
                setPasswordProfissional('')
                setTelefoneProfissional('')
                setCodigoRegional('')
            })
            .catch((error) => {
                console.log("Erro ao cadastrar usuario:" + error)
            })
    }

    useEffect(() => {
        async function loadUsuariosCliente() {
            const dados = onSnapshot(collection(db, "cadastroCliente"), (snapshot) => {
                let listaUsuarioCliente = []

                snapshot.forEach((doc) => {
                    listaUsuarioCliente.push({
                        id: doc.id,
                        nomeCliente: doc.data().nome,
                        emailCliente: doc.data().email,
                        passwordCliente: doc.data().password,
                        telefoneCliente: doc.data().telefone
                    })
                })
                setCadastroCliente(listaUsuarioCliente)
            })
        }
        loadUsuariosCliente()
    }, [])

    useEffect(() => {
        async function loadUsuariosProfissional() {
            const dados = onSnapshot(collection(db, "cadastroProfissional"), (snapshot) => {
                let listaUsuarioProfissional = []

                snapshot.forEach((doc) => {
                    listaUsuarioProfissional.push({
                        id: doc.id,
                        nomeProfissional: doc.data().nome,
                        emailProfissional: doc.data().email,
                        passwordProfissional: doc.data().password,
                        telefoneProfissional: doc.data().telefone,
                        codigoRegional: doc.data().codigoRegional
                    })
                })
                setCadastroProfissional(listaUsuarioProfissional)
            })
        }
        loadUsuariosProfissional()
    }, [])

    async function editarUsuarioCliente() {
        const docRef = doc(db, "cadastroCliente", idCiente)

        await updateDoc(docRef, {
            nome: nomeCliente,
            email: emailCliente,
            password: passwordCliente,
            telefone: telefoneCliente,
        })
            .then(() => {
                console.log("Usuário editado com sucesso!")
                setNomeCliente('')
                setEmailCliente('')
                setPasswordCliente('')
                setTelefoneCliente('')
            })
            .catch((error) => {
                console.log("Erro ao editar usuário!" + error)
            })
    }

    async function editarUsuarioProfissional() {
        const docRef = doc(db, "cadastroProfissional", idCiente)

        await updateDoc(docRef, {
            nome: nomeProfissional,
            email: emailProfissional,
            password: passwordProfissional,
            telefone: telefoneProfissional,
            codigoRegional: codigoRegional
        })
            .then(() => {
                console.log("Usuário editado com sucesso!")
                setNomeProfissional('')
                setEmailProfissional('')
                setPasswordProfissional('')
                setTelefoneProfissional('')
                setCodigoRegional('')
            })
            .catch((error) => {
                console.log("Erro ao editar usuário!" + error)
            })
    }
    
    return (
        <UsuariosContext.Provider value={valorUsuarios}>
            {children}
        </UsuariosContext.Provider>
    )
}
