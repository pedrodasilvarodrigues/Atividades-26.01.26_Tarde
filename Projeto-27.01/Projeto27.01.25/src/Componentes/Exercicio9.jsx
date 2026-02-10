import "/src/CSS/exe9.css"


function Exercicio9() {
   
    
    function  verificarEstoque() {
   let item = {
    nome : "Produto A",
    quantidade : 5};
    let caixa = document.getElementById('estoque-status');
    if (item.quantidade > 0) {
        caixa.innerText = `Estoque disponível: ${item.quantidade} unidades de ${item.nome}`;
        caixa.style.color = 'green';
    } else {
        caixa.innerText = "Produto esgotado";
        caixa.style.color = 'red';
    }
    }
    

    
  return (
    <div>
       <div id="exercicio9" className="container-principal">
 <h2>Relatório</h2>
 <button className="button-test" onClick={verificarEstoque}>Conferir Estoque</button>
 <div id="estoque-status" style={{marginTop:'10px', fontWeight:'bold'}}>
    
 </div>
      </div>
    </div>
  )
}

export default Exercicio9
