import React, { useState } from "react";

const CalculatorComp = () => {
  // ESTADO DONDE SE VA A GUARDAR LA TECLA PRESIONADA
  const [expresion, setExpresion] = useState("");
  // ESTADO
  const [respuesta, setRespuesta] = useState(0);

  //MUESTRA LAS TECLAS QUE SE HAN OPRIMIDO
  const display = (caracter) => {
    
    setExpresion((contain) => contain + caracter);
    if (expresion[expresion.length - 1] === ":") {
      if (/[0-9.]/.test(caracter)) {
        setExpresion(caracter);
      } else {
        setExpresion(respuesta + caracter);
      }
    }
  };

  //CALCULO
  const calculo = () => {
    try {
      setRespuesta(eval(expresion));
      setExpresion((contain) => contain + " :");
    } catch (error) {
      setRespuesta("SYNTAXIS ERROR!");
      setTimeout(() => {
          allClear()
      }, 1500);
    }
  };

  const handleOneClick = (caracter) => {
    const prueba =  expresion.slice(expresion.length-1) === caracter
    if (prueba === false){
        display(caracter)
    }
  }

  const allClear = () => {
    setExpresion("");
    setRespuesta(0);
  };
  const clear = () => {
    setExpresion((prev) => {
        console.log(prev);
      prev
        .split()
        .slice(0, prev.length - 1)
        .join("")
    });
    setRespuesta(0);
  };

  return (
    <>
      <div className="dis" id="display">
        <input type="text" value={expresion} placeholder="0"  />
        <div className="total">
        {respuesta}
        </div>
      </div>
      <div onClick={allClear} className="padButton AC rojo" id="clear">
        AC
      </div>
      <div onClick={clear} className="padButton C rojo" id="">
        C
      </div>
      <div onClick={() => handleOneClick("/")} className="padButton division" id="divide">
        /
      </div>
      <div onClick={() => handleOneClick("*")} className="padButton multi" id="multiply">
        *
      </div>
      <div onClick={() => display("7")} className="padButton siete gris" id="seven">
        7
      </div>
      <div onClick={() => display("8")} className="padButton ocho gris" id="eight">
        8
      </div>
      <div onClick={() => display("9")} className="padButton nueve gris" id="nine">
        9
      </div>
      <div onClick={() => handleOneClick("-")} className="padButton menos" id="subtract">
        -
      </div> 
      <div onClick={() => display("4")} className="padButton cuatro gris" id="four">
        4
      </div>
      <div onClick={() => display("5")} className="padButton cinco gris" id="five">
        5
      </div>
      <div onClick={() => display("6")} className="padButton seis gris" id="six">
        6
      </div>
      <div onClick={() => handleOneClick("+")} className="padButton suma" id="add">
        +
      </div>
      <div onClick={() => display("1")} className="padButton uno gris" id="one">
        1
      </div>
      <div onClick={() => display("2")} className="padButton dos gris" id="two">
        2
      </div>
      <div onClick={() => display("3")} className="padButton tres gris" id="three">
        3
      </div>
      <div onClick={calculo} className="padButton igual azul" id="equals">
        =
      </div>
      <div onClick={() => display("0")} className="padButton cero gris" id="zero">
        0
      </div>
      <div onClick={() => handleOneClick('.')} className="padButton decimal gris" id="decimal">
        .
      </div>
    </>
  );
};

export default CalculatorComp;
