import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextComponent from "./Context.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ContextComponent>
      <App />
    </ContextComponent>
  </React.StrictMode>,
  document.getElementById("root")
);


