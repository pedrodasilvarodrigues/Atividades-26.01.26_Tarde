import "/src/CSS/exe1.css"

function Exercicio1() {
    function atualizarStatus(){
        let etiqueta = document.getElementById('status-entrega');
    etiqueta.innerText = 'Status Entregue';
    etiqueta.style.color = 'green';

    }

  return (
    <div  id="exercicio1" className="container-principal" >
        <h2>Controle de Entregas</h2>
       <p id="status-entrega">Aguardando Entrega ...</p>

  <button className="button-test" onClick = {atualizarStatus}>Atualizar Status </button>

    </div>
  )
}

export default Exercicio1
