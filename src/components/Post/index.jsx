import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/27959551?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Cesar Henrique Ramos</strong>
                        <span>Developer Full Stack</span>
                    </div>
                </div>
                <time title='22 de Agosto as 14:49:00' dateTime='2023-08-22 14:49:00'>Publicado a uma hora</time>
            </header>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, voluptates iusto! Dolores beatae repudiandae sint fugiat eum sequi eligendi fuga reiciendis aperiam tenetur animi in a, magnam pariatur voluptate quia.</p>
                <p><a href="">Links</a></p>
            </div>
            <form className={styles.comenentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                placeholder='Deixe um comentario' />
                <footer>
                   <button type="submit">Publicar</button> 
                </footer>                
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
        )
}