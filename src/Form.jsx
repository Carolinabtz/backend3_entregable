import { useState } from "react";
import "./App.css"

function Form({onAgregarMascota}){
    const [nombre,setNombre]= useState("");
    const [raza,setRaza]= useState("");


   
   function validarNombre(nombre){
   
    const nombreSinEspacio= nombre.trim()

        if (nombreSinEspacio.length > 2 ) {
            return true;
            } else {
            return false;
            }
    }

  function validarRaza(raza){
  
   if (raza.length > 5) {
        return true;
        } else {
        return false;
        }

    }

    function handleSubmit(e){
        e.preventDefault();
        const nombreValido=validarNombre(nombre)
        const razaValida= validarRaza(raza)
        
        if(nombreValido && razaValida){
        onAgregarMascota({nombre,raza})
        setNombre("");
        setRaza("");
     
        }
        else{
            return alert("Por favor chequea que la información sea correcta" )
        }
        
    }

    return(
        
            <form onSubmit={handleSubmit}>
              <div>
                <input type="text" placeholder="Nombre de la mascota" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                <input type="text" placeholder="Raza de la mascota" value={raza} onChange={(e)=>setRaza(e.target.value)}/>
                <button type="submit">Enviar</button>
               </div>  

            </form>
           
    )


}

export default Form;