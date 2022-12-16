import React from "react";
import styles from "./Info.module.sass";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 >О компании</h2>
        <div className={styles.team}>
          <ul>
            <li>5 отделов</li>
            <li>5 отделов</li>
            <li>5 отделов</li>
            <li>5 отделов</li>
            <li>5 отделов</li>
          </ul>
        </div>
        <div>
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default Info;
