import React from "react";
import styles from "./index.module.sass"
import {Briefings} from "./Briefings";
import photo from "./../../assets/photo/portfolio.svg"

export const Request = ({ briefings }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 id="request">Оставьте заявку</h2>
                <div className={styles.box}>
                    <div className={styles.portfolio}>
                        <div className={styles.photo}>
                            <img
                                src={photo} alt="portret"/>
                        </div>
                        <div className={styles.name}>
                            <p>Юлия Дижа</p>
                        </div>
                        <div className={styles.description}>
                            <p>Поможет запустить ваш проект</p>
                        </div>

                        <div className={styles.briefings}>
                            <h4>Скачать брифинги на:</h4>
                            <div>
                                <Briefings briefings={briefings}/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.request}>
                        <div className={styles.nameInput}>
                            <label htmlFor="firstname"> Ваше имя *</label>
                            <input type="text" name='firstname'/>
                        </div>
                        <div className={styles.contactInput}>
                            <label htmlFor="contact"> Телефон или мессенджер *</label>
                            <input type="text" name='contact'/>
                        </div>
                        <div className={styles.task}>
                            <label htmlFor="task"> Краткое описание задачи *</label>
                            <input type="text" name='task'/>
                        </div>
                        <button className={styles.button}>
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}