import React, { useState } from "react";
import "../styles/TutoStyle.css"
import Programming from "./Programming.js"

//TODO: agregar más divs de tal manera que pueda tener como mínimo 2 secciones bien integradas
const Tutorials = () => {
  const [showProgramming, setShowProgramming] = useState(false);

  const handleArrowClick = () => {
    setShowProgramming(!showProgramming);
  }

  return (
    <div className="container">
      <div className="arrow" onClick={handleArrowClick}>
        {showProgramming ? '▼ Get Started' : '▶ Get Started'}
      </div>
      
      <div className={`programming ${showProgramming ? '' : 'collapsed'}`}>
        <Programming />
      </div>
    </div>
  );
};

export default Tutorials;

