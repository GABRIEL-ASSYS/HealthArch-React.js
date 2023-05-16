import styles from './BotaoPadrao.module.css'

export default function BotaoPadrao({ texto, onClick }) {
  return (
    <button className={styles.botaoPadrao} onClick={onClick}>
        {texto}
    </button>
  )
}
