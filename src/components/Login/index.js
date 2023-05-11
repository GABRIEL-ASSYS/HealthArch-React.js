import 'reset.css'
import styles from './Login.module.css'
import { useState, useEffect } from 'react'
import { auth } from 'firebaseConnection'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
} from 'firebase/auth'

export default function Login() {
    
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
        <div className={styles.containerLogin}>
            {
                user && (
                    <div className={styles.userDetail}>
                        <strong className={styles.textoNegrito}>
                            Seja bem-vindo(a) (Você está logado!)
                        </strong>
                        <br/>
                        <span className={styles.spanLogin}>ID: {userDetail.uid}</span>
                        <button className={styles.botaoLogin} onClick={fazerLogout}>Sair da Conta</button>
                    </div>
                )
            }

            <div className={styles.login}>
                <h2 className={styles.tituloLogin}>Usuários</h2>
                <label className={styles.labelLogin}>Email:</label>
                <input
                    className={styles.inputLogin}
                    placeholder='Digite seu Email'
                    value={email}
                    onChange={(email) => setEmail(email.target.value)}
                />
                <br/>
                <label className={styles.labelLogin}>Senha:</label>
                <input
                    className={styles.inputLogin}
                    type='password'
                    placeholder='Digite sua Senha'
                    value={senha} 
                    onChange={(senha) => setSenha(senha.target.value)}
                />
                <br/>
                <button className={styles.botaoLogin} onClick={novoUsuario}>Cadastrar</button>
                <button className={styles.botaoLogin} onClick={logarUsuario}>Entrar</button>
            </div>
            <br/>
            <hr/>
        </div>
    )
}