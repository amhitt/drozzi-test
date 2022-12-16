import React, { useState } from "react";
import styles from "./Navigation.module.sass"

const Navigation = () => {

const [nav, setNav] = useState(['Портфолио', 'О компании', 'Контакты'])


    return (
        <div>
             <ul className={styles.list}>
                <li className={styles.item}>Портфолио</li>
                <li className={styles.item}>О компании</li>
                <li className={styles.item}>Контакты</li>
             </ul>
        </div>
    )
}


export default Navigation