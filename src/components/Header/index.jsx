import React, {useState} from "react";
import styles from "./index.module.sass";
import logo from "./../../assets/icons/logo.svg";
import {Navigation} from "./Navigation";
import {HeaderMobile} from "./HeaderMobile";


export const Header = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <img src={logo} alt='logo'/>
                </div>
                <div className={styles.mobile}>
                    <HeaderMobile/>
                </div>
                <div className={styles.clickableContainer}>
                    <Navigation/>
                    <a href="#request">
                        <button className={styles.button}>Оставить заявку</button>
                    </a>
                </div>
            </div>
            <div className={styles.description}>
                <p>Маркетинговое агентство.</p>  <p>С нами вы растете как на <br/> дрожжах</p>
            </div>
        </div>
    );
};

