import React from "react";
import { useState, createContext } from "react";

const oneContext = createContext();

const ContextComponent = ({ children }) => {
  const [name, setName] = useState('johnny');
  console.log(name);
  return (
    <oneContext.Provider value={name, setName}>
      {children}
    </oneContext.Provider>
  );
}

export default ContextComponent;
