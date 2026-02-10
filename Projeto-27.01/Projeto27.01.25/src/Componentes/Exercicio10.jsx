import "/src/CSS/exe10.css"


function Exercicio10() {
  
    
    function realizarCotacao() {
    let valorDigitado = document.getElementById('input-preco').value;

    let cotacao = {
fornecedor: "AgroTop Distribuidora",
valorSugerido: valorDigitado,
status:"Cotação em Análise",
    };

    document.getElementById('res-fornecedor').innerText = `Fornecedor: ${cotacao.fornecedor}`;
    document.getElementById('res-valor').innerText = `Preço Cotado: R$ ${cotacao.valorSugerido}`;
    document.getElementById('res-status').innerText = cotacao.status;

    }
   
    
  return (
    <div id="exercicio10" className="container-principal">
       
<h2>Cotação e Compras</h2>
<input id="input-preco" type="number" placeholder="Digite o valor da cotação"/>
<button  className="button-test"onClick={realizarCotacao}>Registrar Cotação</button>

<div style={{marginTop: "15px", backgroundColor: "#eee", padding:"10px"}}></div>
 <p id="res-fornecedor"></p>
 <p id="res-valor"></p>
 <p id="res-status" style={{fontWeight: "bold", color: "orange"}}></p>
 
    </div>
  )
}

export default Exercicio10
