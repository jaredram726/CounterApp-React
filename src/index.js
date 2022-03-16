import React from "react";
import ReactDom from "react-dom";
import CounterApp from "./CounterApp";
// import PrimeraApp from "./PrimeraApp";

import './index.css';


const divRoot = document.querySelector('#app');


// ReactDom.render( <PrimeraApp saludo="Hola, soy Goku" />, divRoot );
ReactDom.render( <CounterApp />, divRoot );

