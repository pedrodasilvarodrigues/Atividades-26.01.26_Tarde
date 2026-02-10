import "/src/CSS/exe6.css"

function Exercico6() {
    function calcularTotal() {
        let produtos = [
            { nome: 'Produto A', preco: 100.50 , imposto:15},

        ];
        let resultado = document.getElementById('total-compra');
        let total = produtos.preco + produtos.imposto;
        resultado.innerText = `Total: R$ ${total.toFixed(2)}`;
        }
  return (
    <div  id="exercicio6" className="container-principal">
        <h2>Cálculo de Total de Produtos</h2>
        <button  className="button-test"onClick={calcularTotal}>Calcular Total</button>
        <div id="total-compra" style={{marginTop:'10px', fontWeight:'bold'}}>
        </div>
      
    </div>
  )
}
export default Exercico6