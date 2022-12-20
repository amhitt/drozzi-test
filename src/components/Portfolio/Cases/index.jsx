import React from "react";
import Case from "./Case";
import styles from "./index.module.sass";

const Cases = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.list}>

                {props.cases.map((e) => (
                    <Case
                        key={e.id}
                        id={e.id}
                        tag={e.tag}
                        name={e.name}
                        desc={e.desc}
                        background={e.background}/>))}

            </div>
        </div>
    );
};

export default Cases;
