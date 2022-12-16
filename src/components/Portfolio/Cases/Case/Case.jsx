import React from "react";
import styles from "./Case.module.sass"

const Case = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
               <div style={{background: props.background}} className={styles.background}> </div> 
               <div className={styles.tag}>{props.tag}</div>
            </div>
            <div><h4 className={styles.cardName}>{props.name}</h4></div>
            <p className={styles.description}>{props.desc}</p>
        </div>
    )
}

export default Case