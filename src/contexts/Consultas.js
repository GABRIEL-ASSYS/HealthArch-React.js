import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { db } from 'firebaseConnection'
import { doc, collection, addDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from "firebase/firestore";

export const ConsultasContext = createContext()

export function useConsultas() {
    return useContext(ConsultasContext)
}

export function ConsultasProvider({ children }) {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [hora, setHora] = useState('')
    const [idConsulta, setIdConsulta] = useState('')

    const [consultas, setConsultas] = useState([])

    useEffect(() => {
        async function loadConsultas() {
            const dados = onSnapshot(collection(db, "consultas"), (snapshot) => {
                let listaConsulta = []

                snapshot.forEach((doc) => {
                    listaConsulta.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        descricao: doc.data().descricao,
                        hora: doc.data().hora
                    })
                })
                setConsultas(listaConsulta)
            })
        }
        loadConsultas()
    }, [])

    const consultasValue = useMemo(
        () => ({
            consultas,
            adicionarConsulta,
            buscaConsulta,
            editarConsulta,
            excluirConsulta
        }),
        [consultas]
    )

    async function adicionarConsulta() {
        await addDoc(collection(db, "consultas"),
            {
                titulo: titulo,
                descricao: descricao,
                hora: hora
            })
            .then(() => {
                console.log("Consulta cadastrada com sucesso!")
                setTitulo('')
                setDescricao('')
                setHora('')
            })
            .catch((error) => {
                console.log("Erro ao cadastrar consulta:" + error)
            })
    }

    async function buscaConsulta() {
        const docRef = collection(db, "consultas")
        const lista = []
        await getDocs(docRef)
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        descricao: doc.data().descricao,
                        hora: doc.data().hora
                    })
                })
                setConsultas(lista)
            })
            .catch((error) => {
                console.log("Erro ao buscar consulta" + error)
            })
    }

    async function editarConsulta() {
        const docRef = doc(db, "consultas", idConsulta)

        await updateDoc(docRef, {
            titulo: titulo,
            descricao: descricao,
            hora: hora
        })
            .then(() => {
                console.log("Consulta editada com sucesso!")
                setIdConsulta('')
                setTitulo('')
                setDescricao('')
                setHora('')
            })
            .catch((error) => {
                console.log("Erro ao editar consulta!" + error)
            })
    }

    async function excluirConsulta() {
        const docRef = doc(db, "consultas", idConsulta)

        await deleteDoc(docRef)
            .then(() => {
                alert("Consulta excluida com sucesso!")
            })
            .catch((error) => {
                console.log("Erro ao excluir a consulta!" + error)
            })
    }

    return (
        <ConsultasContext.Provider value={consultasValue}>
            {children}
        </ConsultasContext.Provider>
    )
}