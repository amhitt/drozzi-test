import React from "react";
import styles from "./Header.module.sass";
import logo from "./../../assets/icons/logo.svg";
import Navigation from "./Navigation/Navigation.jsx";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className={styles.clickableСontainer}>
          <Navigation />
          <button className={styles.button}>Оставить заявку</button>
        </div>
      </div>
      <div className={styles.description}>
        <p>Маркетинговое агентство.</p>  <p>С нами вы растете как на дрожжах</p> 
      </div>
    </div>
  );
};

export default Header;
