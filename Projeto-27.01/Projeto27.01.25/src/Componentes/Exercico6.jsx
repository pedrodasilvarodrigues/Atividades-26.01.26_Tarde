import React from 'react'

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
    <div style={{padding:'20px', border:'1px solid #ccc', marginTop:'10px'}}>
        <h2>Cálculo de Total de Produtos</h2>
        <button onClick={calcularTotal}>Calcular Total</button>
        <div id="total-compra" style={{marginTop:'10px', fontWeight:'bold'}}>
        </div>
      
    </div>
  )
}
export default Exercico6
