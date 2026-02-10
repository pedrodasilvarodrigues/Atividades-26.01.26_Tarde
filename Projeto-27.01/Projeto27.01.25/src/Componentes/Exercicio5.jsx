import "/src/CSS/exe5.css"

function Exercicio5() {
    
    
    function saudacliente() {
      let nomeDigitado = document.getElementById('nome-cliente').value;
      let mensagem = document.getElementById('mensagem-saudacao');
        mensagem.innerText = `Olá, ${nomeDigitado}!`;
    }
    
  
    
  return (
    <div  id="exercicio5" className="container-principal">
     <h2>Saudação ao Cliente</h2> 
      <input type="text" id="nome-cliente" placeholder="Digite seu nome"/>
      <button  className="button-test"onClick={saudacliente}>Mostrar Saudação</button>
      <div id="mensagem-saudacao" style={{marginTop: "10px", fontWeight: "bold"}}>Boas Vindas!
      </div>
    </div>
  );
  
}

export default Exercicio5
