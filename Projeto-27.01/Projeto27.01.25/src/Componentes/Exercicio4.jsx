import "/src/CSS/exe4.css"

function Exercicio4() {
    function destacarAtraso() {
        let caixa = document.getElementById('alerta-cobranca');
        caixa.style.color = 'red';
        caixa.style.color = "1px solid black";
        caixa.innerText = 'Pagamento Atrasado!';
    }
  return (
    <div  id="exercicio4" className="container-principal">
  <h2>Cobrança</h2>
  <div id="alerta-cobranca" >Status: Normal</div>
<button  className="button-test"onClick={destacarAtraso}>Destacar Atraso</button>
    </div>
    );
}

export default Exercicio4
