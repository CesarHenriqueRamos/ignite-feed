import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from '../Avatar'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/27959551?v=4"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Cesar Henrique Ramos</strong>
                            <time title='22 de Agosto as 14:49:00' dateTime='2023-08-22 14:49:00'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentario'><Trash size={24} /></button>
                    </header>
                    <p>Muito bom</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>10</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}