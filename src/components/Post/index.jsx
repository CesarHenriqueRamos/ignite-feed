import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/27959551?v=4" />
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
        </article>
        )
}