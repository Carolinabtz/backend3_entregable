import { useState } from 'react'
import Card from './Card'
import Form from './Form';

import './App.css'

function App() {

  const [mascotas,setMascotas] =useState([]);
  
  const agregarMascota = (mascota)=>{
    setMascotas([mascota])
  }

  return (
    <div className="App">
      <h1>Elije tu mascota</h1>
      <Form onAgregarMascota= {agregarMascota}/>
      <Card mascotas={mascotas}/>
    </div>
  );
  
  
}

export default App
