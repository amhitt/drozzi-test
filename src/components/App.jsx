import React from "react";
import styles from "./App.module.sass";
import Header from "./Header/Header.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";

const state = {
  cases: [
    {
      id: 1,
      tag: "МАРКЕТИНГ",
      name: '"Натали" - Ивановский трикотаж оптом',
      desc: "Редизайн сайта, поддержка сайта",
      img: {
        firctCol: '#A18CD1',
        secondCol: '#FBC2EB'
      },
    },
    {
      id: 2,
      tag: "ВЕБ РАЗРАБОТКА",
      name: "Podium — эротический массаж",
      desc: "Разработка, редизайн",
      img: {
        firctCol: '#FF9A9E',
        secondCol: '#FAD0C4'
      },
    },
  ],
};

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Portfolio cases={state.cases}/>
    </div>
  );
};

export default App;
