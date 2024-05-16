import React, { useState } from 'react';

export const Genedecolores = () => {
  const [color, setColor] = useState("");

  const generateRandomColor = () => {
    const coloraleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(coloraleatorio);
  };

  return (
    <>
      <div className="div-color" style={{ backgroundColor: color}}></div>
      <button onClick={generateRandomColor}>Toca para cambiar el color</button>
    </>
  );
}



