import React from "react";
import styles from "./index.module.sass"

export const Deserts = ({ deserts }) => {

    return (
        <div className={styles.container}>
            {deserts.map((e) => (<div
                key={e.id}
                className={styles.box}>
                <div className={styles.number}>{e.number}</div>
                <div className={styles.desert}>{e.desert}</div>
            </div>))}
        </div>)
}