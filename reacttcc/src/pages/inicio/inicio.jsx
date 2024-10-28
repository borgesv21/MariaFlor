import './inicio.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.jsx';
import Rodape from '../../components/rodape/rodape.jsx';
import CardProduto from '../../components/card-produto/cardProduto.jsx';


function Inicio() {
  return (
    <div className="inicio">
      <header className="principal">
        <Cabecalho/>
      </header> 

    <div className='conteudo'>
      <div className='faixa'>
        <a href="/salgados"> <img src="./images/salgado.png" alt="" /></a>
        <a href="/doces"> <img src="./images/doce.png" alt="" /></a>
      </div>

      <h2 className='slogan'>"Maria Flor, o sabor está no amor"</h2>

      <div className='faixa-dois'>
        <p>Ordernar por</p>

        <select name="ordenar">
          <option value="todas">Todas as categorias</option>
          <option value="doces">Doces</option>
          <option value="salgados">Salgados</option>
          <option value="zeroacucar">Zero Açucar</option>
          <option value="diet">Diet</option>
          <option value="ordemalfabetica">Ordem Alfabética A-Z</option>
          <option value="ordemid">Número do ID</option>
        </select>
      </div>

      <div className='cards'>
        <div className='add-card'>
          <a href="/addproduto"> <img src="./images/add.png" alt="" width={90}/> <h2>Adicionar Produto</h2></a>
        </div>
        <CardProduto/>
        <CardProduto/>
        <CardProduto/>
      </div>

      </div>
        <Rodape/>
      </div>
  );
}

export default Inicio;
