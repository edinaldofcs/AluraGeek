import { lista } from '../../js/fakeAPI/index.js'
import { containerCards } from '../../js/index.js'
import { footer, nav } from '../../js/navHeader/index.js'


const productInfo = (produto)=>{
  const productInfos = document.querySelector('[data-product]')
  
  const html = `
  <div class="product__img" id="teste" style="background-image: url('${produto.img}');background-size: contain ;"></div>
  <div class="product__infos">
    <h1>${produto.nome}</h1>
    <p>R$ ${produto.preco.toFixed(2)}</p>
    <p>${produto.descricao}</p>
  </div>
  `
  productInfos.innerHTML = html;
}


window.onload = function () {
  const url = new URL(window.location)
  const listIndex = url.searchParams.get('listIndex')
  const id = url.searchParams.get('id')

  
  
  const path = '../../img/setaSlider.png'
  const seta = '../../img/seta.png'
  const productURL = ''
  containerCards(lista[listIndex],listIndex,path,seta,productURL);
  const title = document.querySelector('[data-title]')
  title.innerHTML = "Produtos similares"

  const paths = {
    controle: "../../img/controle.png",
    alura: "../../img/alura.png",
    geek: "../../img/geek.png",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    imgSeta: "../../img/seta.png",
    imgSlider: "../../img/setaSlider.png"
  } 
  

  nav(paths);
  productInfo(lista[listIndex].produtos[id-1].infos)
  footer(paths);

}