 import "/src/CSS/exe8.css"
 
function Exercicio8() {

    function verLocal() {
let analise = {
    "id" : 1,
    "propriedade" : {"nome" : "Terra Boa", "Cidade":"Muriaé"}

}

let info = document.getElementById('local-info');
info.innerText = `Local: ${analise.propriedade.nome}, ${analise.propriedade.Cidade}`;
    
}
    

    
  return (
    <div>
      <div id="exercicio8" className="container-principal">
 <h2>Relatório</h2>
 <button  className="button-test"onClick={verLocal}>Ver Local</button>
 <div id="local-info" style={{marginTop:'10px', fontWeight:'bold'}}>
    
 </div>
      </div>
    </div>
  )
}

export default Exercicio8
