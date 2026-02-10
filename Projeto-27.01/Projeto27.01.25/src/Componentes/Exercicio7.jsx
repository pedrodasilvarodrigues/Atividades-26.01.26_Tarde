 import "/src/CSS/exe7.css"

function Exercicio7() {

    function mostrarPrimeiraEntrega() {
   let entregas = 
   ["Fazenda Primavera", 
    "Fazenda Sol Nascente", 
    "Fazenda Boa Vista"
];
   let campo = document.getElementById('primeira-entrega');
   campo.innerText = `Primeira entrega: ${entregas[0]}`;
    }
    
  
    
  return (
 <div  id="exercicio7" className="container-principal">
      
<h2>Lista de Entregas</h2>
<button  className="button-test"onClick={mostrarPrimeiraEntrega}>Mostrar Primeira Entrega</button>
<div id="primeira-entrega" style={{marginTop:'10px', fontWeight:'bold'}}></div>


    </div>
  )
}

export default Exercicio7
