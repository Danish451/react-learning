import React from 'react';    //core react library
import ReactDOM from 'react-dom/client';    //react implementation on browser
import App from './App';

// through ReactDOM we create a createRoot element
// createRoot expects an element(like div) from html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
  
);