import React from 'react';
import "./style.css"
import { Contador } from "./Contador.jsx"
import { Genedecolores } from "./Genedecolores.jsx"
import { Emojis } from "./Emojis.jsx";
import { Adivinanza } from "./Adivinanza.jsx";
import fotodeperfil2 from './assets/fotodeperfil2.jpeg';



export const PrimerComponente = ({presentacion, nombre, apellido, profesion, descripcion}) => {

  return (
    <>
      <div className='componente1'>
      <img src={fotodeperfil2} alt="Foto de perfil" className="imagen-perfil" />
        <h1>Presentacion {presentacion} </h1>
        <h2>Nombre:{nombre} </h2>
        <h2>Apellido:{apellido}</h2>
        <h2>Profesión:{profesion}</h2>
        <h2>Descripcion:{descripcion}</h2>
      </div>
      <div className='style1'>
      <Contador/>
      </div>
      <div className='style2'>
      <Genedecolores/>
      </div>
      <div className='style3'>
      <Emojis/>
      </div>
      <div className='style4'>
      <Adivinanza/>
      </div>

    </>
  );
};
  
