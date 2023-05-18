import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'bootstrap/dist/js/bootstrap.js';
//import 'bootstrap/dist/js/bootstrap.js'; *



//función para renderizar la pagína, necesita un componente y un html
//ReactDOM.render(<h1>Hola mundo.</h1>, document.querySelector('#root'));
ReactDOM.render(<App/>, document.querySelector('#root'));