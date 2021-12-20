import React from "react";
import { useContext } from "react";
import ContextComponent from "./Context.jsx";

function SomeComp() {
  const  name  = useContext(ContextComponent);
  return (
    <>
      <h1>{`grandchild of ${name} sends Hi`}</h1>
    </>
  );
}

export default SomeComp;
