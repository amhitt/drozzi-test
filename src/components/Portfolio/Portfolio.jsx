import React from "react";
import Cases from "./Cases/Cases.jsx";
import styles from "./Portfolio.module.sass"

const Portfolio = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
               <h2 className={styles.headerText}>Портфолио</h2> 
               <button className={styles.seeAllBut}>СМОТРЕТЬ ВСЕ</button>
            </div>
            <Cases cases={props.cases}/>
            <button className={styles.allCasesBut}>ВСЕ КЕЙСЫ</button>
        </div>
    )
}

export default Portfolio