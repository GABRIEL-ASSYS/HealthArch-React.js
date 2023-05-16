import Login from 'components/Login'
import Footer from 'components/Footer'
import Header from 'components/Header'
import styles from './LoginPage.module.css'

export default function LoginPage() {
    return (
        <div className={styles.containerLoginPage}>
            <Login />
        </div>
    )
}