import React from "react";
import styles from "./index.module.sass";


export const Team = ({ team }) => {
    return (<div className={styles.container}>
        <ul>
            {team.map((e) => (
                <li className={styles.box} key={e.id}><p className={styles.number}> {e.number}  </p> <p
                    className={styles.member}> {e.member}</p></li>))}
        </ul>
    </div>)
}