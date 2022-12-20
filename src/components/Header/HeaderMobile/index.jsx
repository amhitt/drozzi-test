import React, {useState} from "react";
import burger from "./../../../assets/icons/icon/burger.svg"
import closeBurger from "./../../../assets/icons/icon/close.svg"
import styles from "./index.module.sass"
import logo from "./../../../assets/icons/logo.svg"

export const HeaderMobile = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const openModal = () => {
        setModalOpen(!modalOpen)
    }
    return (
        <div>
            <div
                onClick={openModal}
                className={styles.burger}>
                <img src={burger} alt="menu"/>
            </div>
            {modalOpen &&  (
                <div className={styles.modalContainer}>
                    <div className={styles.header}>
                        <div>
                            <img src={logo} alt="logo"/>
                        </div>
                        <button
                            onClick={openModal}
                            className={styles.closeButton}><img src={closeBurger} alt=""/>
                        </button>
                    </div>

                    <div className={styles.menu}>
                        <ul>
                            <li>Портфолио</li>
                            <li>О компании</li>
                            <li>Контакты</li>
                        </ul>
                    </div>

                </div>
            )}
        </div>
    )
}