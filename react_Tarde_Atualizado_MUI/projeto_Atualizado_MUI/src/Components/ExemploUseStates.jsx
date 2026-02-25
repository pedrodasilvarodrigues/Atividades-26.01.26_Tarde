import React from "react"


function ExemploUseStates() {
    
    const [numero,setNumero]= React.useState(0);
    
    function aumentar() {
  setNumero(numero + 1);
    }
    

    
  return (
    <div className="container-form">
      <h1>Contador: {numero}</h1>
      <button onClick={aumentar}>Aumentar Número</button>
    </div>
  )
}

export default ExemploUseStates
