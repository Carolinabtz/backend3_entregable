import React from "react";

const Card = ({mascotas}) => {

  return ( 
   <div className="card">
   {mascotas.map((mascota,index)=>(
    

  <div key={index}>Hola!! {mascota.nombre}
  La raza de tu mascota es:!!! {mascota.raza}</div>
  ))}
  </div>
  )

  }


export default Card;