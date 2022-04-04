import { lista } from '../../js/fakeAPI/index.js'
import { containerCards } from '../../js/index.js'
import { footer, nav } from '../../js/navHeader/index.js'


window.onload = function () {
  // return
  
  const path = '../../img/setaSlider.png'
  const seta = '../../img/seta.png'
  const productURL = '../product/index.html'

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
  containerCards(lista, 0, path, seta, productURL);
  footer(paths);  

  const titulos = document.querySelectorAll('.content__title')

  titulos.forEach((item,index)=>{
    if(index != 0){
      item.remove();
    }
  })
  titulos[0].innerHTML = `
  <h2 data-title>Todos os produtos</h2>
  <a href="../addProduct/index.html" class="btn__submit" style="color: #fff">Adicionar produto</a>
  `

}