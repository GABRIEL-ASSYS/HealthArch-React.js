import 'reset.css'
import styles from './Consultas.module.css'
import { useState, useEffect } from 'react'
import { db } from 'firebaseConnection'
import { doc, collection, addDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'

export default function Consultas() {

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

                <button className={styles.botaoConsulta} onClick={adicionarConsulta}>Cadastrar</button>
                <button className={styles.botaoConsulta} onClick={buscaConsulta}>Buscar Consulta</button>
                <button className={styles.botaoConsulta} onClick={editarConsulta}>Editar Consulta</button>
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

                                <button className={styles.botaoConsulta} onClick={() => excluirConsulta(consulta.id)}>Excluir</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}