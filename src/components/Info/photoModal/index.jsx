import React, {useState} from "react";
import photo from "../../../assets/photo/team.png";
import styles from "./index.module.sass"
import closeButton from "./../../../assets/icons/icon/close-white.svg"
export const PhotoModal = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const openModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <div className={styles.container}>
            <div
                className={styles.photo}>
                <img
                    onClick={openModal}
                    src={photo} alt="team photo"/>
            </div>
            {modalOpen && (
                <div className={styles.modalContainer}>

                        <div className={styles.bigPhoto}>
                            <img src={photo} alt="team photo"/>
                        </div>
                        <button
                            className={styles.close}
                            onClick={openModal}>
                            <img src={closeButton} alt="close"/>
                        </button>

                </div>
            )}
        </div>
    )
}
