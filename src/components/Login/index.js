import '../../reset.css'
import './Login.css'
import { useState, useEffect } from 'react'
import { auth } from '../../firebaseConnection'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { async } from '@firebase/util'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [user, setUser] = useState('')
    const [userDetail, setUserDetail] = useState({})

    useEffect(() => {
        async function checkLogin() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(true)
                    setUserDetail({
                        uid: user.uid,
                        email: user.email
                    })
                } else {
                    setUser(false)
                    setUserDetail({})
                }
            })
        }
        checkLogin()
    }, [])

    async function novoUsuario() {
        await createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
            setEmail('')
            setSenha('')
        })
        .catch((error) => {
            if (error.code === 'auth/weak-password'){
                alert("Senha muito fraca!")
            } else if (error.code === 'auth/email-already-in-use'){
                alert("Email já cadastrado!")
            }
        })
    }

    async function logarUsuario() {
        await signInWithEmailAndPassword(auth, email, senha)
        .then(() => {
            setUserDetail({
                uid: user.uid,
                email: user.email
            })
            setUser(true)
            setEmail('')
            setSenha('')
        })
        .catch(() => {
            alert("Usuário ou senha inválidos!")
        })
    }

    async function fazerLogout() {
        await signOut(auth)
        .then(() => {
            setUser(false)
            setUserDetail({})
        })
    }
 
    return (
        <div>
            {
                user && (
                    <div>
                        <strong>
                            Seja bem-vindo(a) (Você está logado!)
                        </strong>
                        <br/>
                        <span>ID: {userDetail.uid}</span>
                        <button onClick={fazerLogout}>Sair da Conta</button>
                    </div>
                )
            }

            <div className='container'>
                <h2>Usuários</h2>
                <label>Email:</label>
                <input placeholder='Digite seu Email' value={email}  onChange={(email) => setIdPost(email.target.value)} />
                <br/>
                <label>Senha:</label>
                <input placeholder='Digite sua Senha' value={senha}  onChange={(senha) => setIdPost(senha.target.value)} />
                <br/>
                <button onClick={novoUsuario}>Cadastrar</button>
                <button onClick={logarUsuario}>Entrar</button>
            </div>
            <br/>
            <hr/>
        </div>
    )
}

export default Login