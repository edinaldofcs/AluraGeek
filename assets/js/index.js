import { lista } from './fakeAPI/index.js'
import { slider } from './slider/index.js'
import { nav, footer } from './navHeader/index.js'

export function createCards(listaDeProdutos, index, url) {
  var cardContainer = ''
  listaDeProdutos.produtos.map((element) => {
    let a = `
    <div class="content__card">
      <a href="${url}?listIndex=${index}&id=${element.infos.id}"><img src="${element.infos.img}" alt=""></a>
      <div class="card__info">
        <p class="content__card--title">${element.infos.nome}</p>
        <p class="content__card--price">R$ ${element.infos.preco.toFixed(2)}</p>
        <a href="${url}?listIndex=${index}&id=${element.infos.id}">Ver produto</a>
      </div>
    </div>`
    cardContainer += a
  })
  return cardContainer
}

function HTML(title, cards, imgPath, seta) {

  let innerHTML = `
    <div class="content__container">
        <div class="content__title">
          <h2 data-title>${title}</h2>
          <div>
            <a href="">Ver tudo <img src="${seta}" /></a>
          </div>
        </div>
        <div class="card__container">
        <span class="span voltar"><img src="${imgPath}" alt="" class="img"></span>
        <div class="cards">
        ${cards}
        </div>
        <span class="span avancar"><img src="${imgPath}" alt=""></span>
        </div>
    </div>`;
  return innerHTML
}

export function containerCards(listaDeProdutos, idx, imgPath, seta, url) {
  var cardSection = document.querySelector(".content")
  cardSection.innerHTML = ''

  if (listaDeProdutos.length > 1) {
    listaDeProdutos.forEach((item, index) => {
      let productURL = url || './assets/pages/product/index.html'
      let cardContainer = createCards(item, index, productURL)
      cardSection.innerHTML += HTML(item.titulo, cardContainer, imgPath, seta);
      cardContainer = ''
    })
    slider();

    return
  }
  let cardContainer = createCards(listaDeProdutos, idx, url)
  cardSection.innerHTML += HTML(listaDeProdutos.titulo, cardContainer, imgPath, seta);
  cardContainer = ''
  slider();
}

window.onload = function () {
  
  const path = 'assets/img/setaSlider.png'
  const seta = 'assets/img/seta.png'
  const paths = {
    controle: "assets/img/controle.png",
    alura: "assets/img/alura.png",
    geek: "assets/img/geek.png",
    lupa: "assets/img/lupa.png",
    home: "#",
    imgSeta: "assets/img/seta.png",
    imgSlider: "assets/img/setaSlider.png"
  } 

  nav(paths);
  containerCards(lista, 0, path, seta);
  footer(paths);  
}


