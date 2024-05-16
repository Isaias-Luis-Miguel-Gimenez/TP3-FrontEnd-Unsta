import React, { useState } from 'react';

export function Adivinanza() {

  

  const [numerosaleatorios, setnumerosaleatorios] = useState(numberRandom())

  const [adivinanzanum, setadivinanzanum] = useState("")

  const [mensaje, setmensaje] = useState("")

  function numberRandom () { 
    return Math.floor(Math.random() * 10) + 1;
  
  } 
  const controladiv = () => {
    const numerocorrecto = parseInt(adivinanzanum)
    if (numerocorrecto === numerosaleatorios){
      setmensaje("¡Es correcto!")

    } else if  (numerocorrecto != numerosaleatorios) {
        setmensaje("¡Es incorrecto!")}

    
  }


  return (
    <div>
      <p>Adivina un número entre 1 y 10</p>
        <input
          type="number"
          value={adivinanzanum}
          onChange={ (e) => setadivinanzanum(e.target.value) }
          min="1"
          max="10"
          required
        />
        <button onClick={controladiv}>Adivinar</button>
      <p>{mensaje}</p>

    </div>
  );
}


