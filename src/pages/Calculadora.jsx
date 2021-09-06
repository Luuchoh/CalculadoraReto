import React from "react";
import CalculatorComp from "../components/CalculatorComp";
import '../styles/style.css'

const Calculadora = () => {
  return (
    <div className="container">
      <div className="grid">
        <CalculatorComp />
      </div>
    </div>
  );
};

export default Calculadora;
