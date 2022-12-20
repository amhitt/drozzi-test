import React from "react";
import styles from "./index.module.sass"
import arrow from "./../../../assets/icons/Frame 254.svg"

export const Briefings = ({ briefings }) => {
    return (
        <div className={styles.container}>
            {briefings.map((e) => (
                <div
                    key={e.id}
                    className={styles.box} id={e.id}>
                    {e.briefing}
                <div className={styles.arrow}>
                    <img src={arrow} alt=""/>
                </div>
            </div>))}
        </div>
    )
}