import React from "react";
import {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./links/Header"
import Section from "./links/Section";
import BMI from "./links/BMI";
import PPM from "./links/PPM";
import CPM from "./links/CPM";
import "./App.css"

function App() {



    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const links = [
        {
            link: "links/bmi",
            title: "bmi",
            component: <BMI weight={weight} setWeight={setWeight} height={height} setHeight={setHeight}/>
        },
        {
            link: "links/ppm",
            title: "ppm",
            component: <PPM/>
        },
        {
            link: "links/cpm",
            title: "cpm",
            component: <CPM/>
        },

    ]

  return (

    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header links={links}/>
            <Section links={links} setWeight={setWeight} weight={weight}/>
        </BrowserRouter>


    </div>
  );
}

export default App;
