import React from "react";
import styles from "./Case.module.sass"

const Case = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.box}></div>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
        </div>
    )
}

export default Case