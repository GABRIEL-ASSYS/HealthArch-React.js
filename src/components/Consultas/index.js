import '../../reset.css'
import './Consultas.css'
import { useState, useEffect } from 'react'
import { db } from '../../firebaseConnection'
import {
    doc,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    onSnapshot
} from 'firebase/firestore'
import { async } from '@firebase/util'

const Consultas = () => {

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
        const docRef = doc(db, "consultas")

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
        const docRef = doc(db, "consultas")

        await deleteDoc(docRef)
            .then(() => {
                alert("Consulta excluida com sucesso!")
            })
            .catch((error) => {
                console.log("Erro ao excluir a consulta!" + error)
            })
    }

    return (
        <div className='background'>
            <div className='consultas'>
                <h2>Consultas:</h2>

                <label>ID da Consulta:</label>
                <input placeholder='Digite o ID da Consulta' value={idConsulta} onChange={(id) => setIdConsulta(id.target.value)} />
                <br />
                <label>Título:</label>
                <input placeholder='Digite o título da Consulta' value={titulo} onChange={(titulo) => setTitulo(titulo.target.value)} />
                <br />
                <label>Descrição:</label>
                <input placeholder='Digite a descrição da Consulta' value={descricao} onChange={(descricao) => setDescricao(descricao.target.value)} />
                <br />
                <label>Hora:</label>
                <input type='time' value={hora} onChange={(hora) => setHora(hora.target.value)} />
                <br />

                <button onClick={adicionarConsulta}>Cadastrar</button>
                <button onClick={buscaConsulta}>Buscar Consulta</button>
                <button onClick={editarConsulta}>Editar Consulta</button>
            </div>
            <div className='consultas'>
                <ul>
                    {consultas.map((consulta) => {
                        return (
                            <li>
                                <span>ID: {consulta.id}</span>
                                <br />
                                <span>Título: {consulta.titulo}</span>
                                <br />
                                <span>Descrção: {consulta.descricao}</span>
                                <br />
                                <span>Hora: {consulta.hora}</span>
                                <br />

                                <button onClick={() => excluirConsulta(consulta.id)}>Excluir</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Consultas