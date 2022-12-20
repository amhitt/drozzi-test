import React from "react";
import styles from "./App.module.sass";
import {Header} from "./Header";
import {Portfolio} from "./Portfolio";
import {Info} from "./Info";
import {mockData} from "../mock-data";
import {Request} from "./Request";
import {Footer} from "./Footer";


export const App = () => {
    return (
        <div>
            <Header/>
            <Portfolio cases={mockData.cases}/>
            <Info team={mockData.team} deserts={mockData.deserts}/>
            <Request briefings={mockData.briefings}/>
            <Footer/>
        </div>
    );
};


