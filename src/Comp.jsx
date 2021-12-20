import React from "react";
import { useContext } from "react";
import ContextComponent from "./Context.jsx";
import SomeComp from "./SomeComp.jsx";

function Comp() {
  const  name  = useContext(ContextComponent);
  return (
    <>
      <h1>{`child of ${name} sends Hi`}</h1>
      <SomeComp />
    </>
  );
}

export default Comp;
