

function Exercicio4() {
    function destacarAtraso() {
        let caixa = document.getElementById('alerta-cobranca');
        caixa.style.backgroundColor = 'red';
        caixa.style.color = "1px solid black";
        caixa.innerText = 'Pagamento Atrasado!';
    }
  return (
    <div>
  <h2>Cobrança</h2>
  <div id="alerta-cobranca" style={{}}>Status: Normal</div>
<button onClick={destacarAtraso}>Destacar Atraso</button>
    </div>
    );
}

export default Exercicio4
