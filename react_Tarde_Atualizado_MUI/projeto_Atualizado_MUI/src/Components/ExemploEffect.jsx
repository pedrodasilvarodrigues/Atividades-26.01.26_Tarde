import React, {useEffect} from "react";


function ExemploEffect() {
const [status, setStatus] = React.useState("Carregando...");

//O useEffect executa automaticamente

React.useEffect(function(){
    //Simulando que após 5 segundos algo acontece
    setTimeout(function(){
        setStatus("Dados Carregados!");
    }, 5000); // 0 [] garante que só rode uma vez
},[]);

  return (
    <div className="container-form">
      <h1>Status do Sistema : {status}</h1>
      <p>O Vigia{useEffect} mudou o texto sozinho após 5 segundos!</p>
    </div>
  )
}

export default ExemploEffect
