import "/src/CSS/apiExercicio1.css"

function ApiExercicio1() {
  function buscarGatinho() {
     var status = document.getElementById("status");
     var imagem = document.getElementById("foto-gato");

     status.innerHTML = "Buscando gatinho na nuvem...";

     //O Fetch inicia a viagem até a API
     fetch("https://api.thecatapi.com/v1/images/search")
     .then(function(resposta) {
        //Primeiro 'then' : Transforma a resposta bruta em JSON
        return resposta.json();   
     })
     .then(function(dados){
        //Segundo 'then' : Usa os dados (lembrando que a API de gatos manda uma lista[])
        var urlGatinho = dados[0].url;

        imagem.src = urlGatinho;
        imagem.style.display = "block";
        status.innerHTML = "Gatinho carregado com sucesso!";
     })

    .catch(function(erro){
        //O 'catch' trata se algo der errado (ex:internet caiu)
        status.innerHTML = "Ops! O mensageiro se perdeu.";
        console.error ("Erro no fetch:", erro);
    });
}
  
    
  return (
    <div className="container-principal" id="apiExercic">
      

    <h2>API Externa: The Cat API</h2>
    <button  className="button-test" onClick={buscarGatinho} >Trazer Novo gatinho</button>

<p id="status">Aguardando comando...</p>
<img  id="foto-gato" src="" alt="Gato" className="paragrafh-principal"/>


    </div>
  )
}

export default ApiExercicio1
