import "/src/CSS/exe2.css"

function Exercicio2() {
  function processarDados() {
    //Simulação de JSON 
  let fatura ={
    "cliente" : "João Silva",
    "Valor":250.75,
    "Vencimento":'2024-07-15',
    

  };

  let displey = document.getElementById("detalhes-fatura");
  displey.innerHTML = 
  "Cliente: " + 
  fatura.cliente + 
  "<br>"+
                     
  "Valor: " + 
  fatura.Valor + 
  "<br>"+
                      
  "Vencimento: " +
   fatura.Vencimento;
  }
  return (
    
    <div  id="exercicio2" className="container-principal">
        <h2> Processamento de Fatura</h2>
        <button  className="button-test" onClick={processarDados}> Processar Dados</button>
        <div id="detalhes-fatura"style={{marginTop:'10px',forWeigh:'bold'}}> Resultado Financeiro
        </div>
    </div>
  )
}

export default Exercicio2
