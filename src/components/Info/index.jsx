import React from "react";
import styles from "./index.module.sass";
import photo from "./../../assets/photo/team.png"
import {Team} from "./Team";
import {Deserts} from "./Deserts";
import {PhotoModal} from "./photoModal";

export const Info = ({ team, deserts }) => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 id="aboutCompany">О компании</h2>
                <div className={styles.team}>
                    <Team team={team}/>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.description}>
                        <p>
                            Мы — команда специалистов с опытом, энтузиазмом и лёгким
                            недосыпом. Маркетинговое агентство «Дрожжи» было основано в 2015
                            году, как компания, где можно получить комплексное интернет- и
                            oффлайн-продвижение. На сегодняшний день мы не зависим ни от ниши,
                            ни от географии, ни от специфики продукта. В портфолио компании
                            сотни успешных кейсов, способных помочь вам в реализации своей
                            идеи.
                        </p>
                        <div>
                            <Deserts deserts={deserts}/>
                        </div>
                        <button className={styles.button}>Подробнее</button>
                    </div>
                    <div>
                        <div className={styles.photo}>
                            <PhotoModal/>
                        </div>
                        <div className={styles.photoDesc}>Команда агентства «Дрожжи»</div>
                    </div>

                </div>
            </div>
        </div>
    );
};


