import React from "react";
import Case from "./Case/Case.jsx";
import styles from "./Cases.module.sass";

const Cases = (props) => {
 
  return (
    <div className={styles.container}>
      <div className={styles.list}>

        {props.cases.map((e) => (<Case id={e.id} tag={e.tag} name={e.name} desc={e.desc} img={e.img} />))}

      </div>
    </div>
  );
};

export default Cases;
