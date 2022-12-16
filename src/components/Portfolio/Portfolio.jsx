import React from "react";
import Cases from "./Cases/Cases.jsx";
import styles from "./Portfolio.module.sass"
import arrow from "./../../assets/icons/arrowHoriz.svg"

const Portfolio = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
               <h2 id="portfolio" className={styles.headerText}>Портфолио</h2>
               <button className={styles.seeAllBut}>СМОТРЕТЬ ВСЕ <img src={arrow} alt="" /></button>
            </div>
            <Cases cases={props.cases}/>
            <button className={styles.allCasesBut}>ВСЕ КЕЙСЫ</button>
        </div>
    )
}

export default Portfolio