import React, { useState } from "react";
import styles from "./Navigation.module.sass"

const Navigation = () => {

const [nav, setNav] = useState(['Портфолио', 'О компании', 'Контакты'])


    return (
        <div>
             <ul className={styles.list}>
             <a href="#portfolio"><li className={styles.item} >Портфолио</li></a> 
                <li className={styles.item} id="aboutCompany">О компании</li>
                <li className={styles.item} id="contacts">Контакты</li>
             </ul>
        </div>
    )
}


export default Navigation