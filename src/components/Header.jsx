import styles from './Header.module.css'

import logoTodoSvg from "../assets/logo-todo.svg"

export function Header(){
    return(
        <header className={styles.header}> 
            <img src={logoTodoSvg} alt="Logotipo-do-todo" />
            <strong><span>to</span>do</strong>
        </header>
    )
}