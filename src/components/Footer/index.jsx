import React from "react";
import styles from "./index.module.sass"
import logo from "./../../assets/icons/logo-grey.svg"
export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.element}> 2015-2021 © Дрожжи™ </div>
                <div className={styles.element}> ООО «РВБ-Маркетинг» </div>
                <div className={styles.element}> Политика конфиденциальности </div>
            </div>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}