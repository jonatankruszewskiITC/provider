import React from 'react';
import { useContext } from "react";
import ContextComponent from "./Context.jsx";
import Comp from "./Comp.jsx";


function App() {
const name = useContext(ContextComponent);
  return (
    <ContextComponent value={name}>
      <h1>{`Hello ${name}`}</h1>
      <Comp  />
    </ContextComponent>
  );
};


export default App;
