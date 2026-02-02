
function Exercicio3() {
function mostrarInsumo() {
//Simulação de entrega de API
let insumo ={
    "Nome" : "Adubo Orgânico",
    "Foto" : "https://placecats.com/300/200",
    "Estoque" : "150 Sacos",
};

//buscar o elemento
let titulo = document.getElementById("nome-insumo");
let imagem = document.getElementById("foto-insumo");

//Aplicar os Dados do JSON nos elementos
titulo.innerText = insumo.Nome;
imagem.src = insumo.Foto;
}

  return (
    <div style={{padding:'20px', border:'2px solid #ccc', marginTop:'10px'}}>
      <h2>Resultado Estoque</h2>
      <button onClick={mostrarInsumo}>Mostrar Insumo</button>
      <div id="nome-insumo"  style={{marginTop:'10px',forWeigh:'bold'}}>Resultado do Insumo</div>
      <img id="foto-insumo" alt="Foto do Insumo" style={{marginTop:"10px"}}/>
    </div>
  );

}
export default Exercicio3

