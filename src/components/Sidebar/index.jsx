import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=40" />
            <div className={styles.profile}>
                <strong>Cesar Henrique Ramos</strong>
                <span>Development Full Stack</span>
            </div>
            <footer>
                <a href="#"> Editar seu Perfil</a>
            </footer>
        </aside>
    )
}