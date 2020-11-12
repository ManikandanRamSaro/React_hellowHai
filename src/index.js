import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First from './model/First';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <First name="Manikandan" fun="this was modified using props function"/>
  </React.StrictMode>,
  document.getElementById('root')
);


/*
const myfirstelement = <h1>Hello Mani using DOM!</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));  --> using this to map UI directly 
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
