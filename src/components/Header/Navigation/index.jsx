import React from "react";
import styles from "./index.module.sass"

export const Navigation = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <a href="#portfolio">
                    <li className={styles.item}> Портфолио</li>
                </a>
                <a href="#aboutCompany">
                    <li className={styles.item}> О компании</li>
                </a>
                <li className={styles.item} id="contacts">Контакты</li>
            </ul>
        </div>
    )
}


