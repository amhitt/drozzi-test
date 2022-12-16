import React from "react";
import styles from "./App.module.sass";
import Header from "./Header/Header.jsx";
import Portfolio from "./Portfolio/Portfolio.jsx";

const mockData = {
  cases: [
    {
      id: 1,
      tag: "Маркетинг",
      name: '"Натали" - Ивановский трикотаж оптом',
      desc: "Редизайн сайта, поддержка сайта",
      background: "linear-gradient(90deg, #A18CD1 0%, #FBC2EB 100%), #EEEEEE"
    },
    {
      id: 2,
      tag: "Веб разработка",
      name: "Podium — эротический массаж",
      desc: "Разработка, редизайн",
      background: "linear-gradient(90deg, #FF9A9E 0%, #FAD0C4 99%, #FAD0C4 100%), #EEEEEE"
    },
    {
      id: 3,
      tag: "ВЕДЕНИЕ РЕКЛАМНОЙ КОМПАНИИ",
      name: "Аудит отдела маркетинга и продаж для Название бренда длинное название...",
      desc: "Аудит, маркетинг сюда кратко теги",
      background: "linear-gradient(90deg, #FFECD2 0%, #FCB69F 100%), #EEEEEE"
    },
    {
      id: 4,
      tag: "ВЕДЕНИЕ ГРУПП В СОЦ СЕТЯХ",
      name: "Аудит отдела маркетинга и продаж для Название бренда",
      desc: "Аудит, маркетинг сюда кратко теги",
      background: "linear-gradient(90deg, #D4FC79 0%, #96E6A1 100%), #EEEEEE"
    },
    {
      id: 5,
      tag: "ОПТИМИЗАЦИЯ SEO САЙТА",
      name: "Аудит отдела маркетинга и продаж для Название бренда",
      desc: "Аудит, маркетинг сюда кратко теги",
      background: "linear-gradient(90deg, #FDFBFB 0%, #EBEDEE 100%), #EEEEEE"
    },
    {
      id: 6,
      tag: "СОЗДАНИЕ РЕКЛАМНОЙ КОМПАНИИ",
      name: "Аудит отдела маркетинга и продаж для Название бренда",
      desc: "Аудит, маркетинг сюда кратко теги",
      background: "linear-gradient(90deg, #FFF1EB 0%, #ACE0F9 100%), #EEEEEE"
    }

  ]
};

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Portfolio cases={mockData.cases}/>
    </div>
  );
};

export default App;
