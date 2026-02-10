

function PageProduto() {

  
  function atualizarStatus() {
 let compra = document.getElementById ('button');
  compra.innerHTML = 'Adicionado' ;
  compra.styler.color = 'green';
  }
  

  
  return (
   <div className='container-produto'>
    {/* Card de Número 1 */}
     <div className='card-produto'>
      <img src="https://images.unsplash.com/photo-1735183263607-3655df81fe3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29taWRhc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className='card-image' />
    <h3 className='card-title-produto'>Produtos Selecionados</h3>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, tempora!
    </p>
     <span className='card-price'>R$29.00</span>

     <button onClick={atualizarStatus} className='card-button' id='button'>Adicionar</button>

    </div>
    </div>
  )
}

export default PageProduto

