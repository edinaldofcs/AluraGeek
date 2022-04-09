
const logo = (paths) => {
  const logoLink = `
  <a href="${paths.home}">
      <img src="${paths.controle}" alt="imagem de um controle de videogame">
      <img src="${paths.alura}" alt="alura">
      <img src="${paths.geek}" alt="geek">
  </a>
  `
  return logoLink;
}


export function nav(paths) {

  const navHeader = document.querySelector('[data-nav]');
  const logoLink = logo(paths)
  const html = `
  <div class="navHeader__left">
    <div class="logo">
      ${logoLink}
    </div>
    <div class="navHeader__search">
      <input type="text" class="navHeader__search--input" placeholder="O que deseja encontrar?"/>
      <img src="${paths.lupa}" alt="imagem de uma lupa, para pesquisa" class="navHeader__search--img">
    </div>
  </div>
  ${paths.login && (`<div class="navHeader__login"><a href="${paths.login}" class="btn__login">Login</a><img class="lupa__hidden" src="${paths.lupa}" alt="imagem de uma lupa" data-input/></div><input type="text" class="lupa__hidden--input" placeholder="O que deseja encontrar?"/>`)}
  `;

  navHeader.innerHTML = html;

  if(paths.inputShow){
    inputShow();
  }

}

export function inputShow(){
  const img = document.querySelector('[data-input]')
  img.addEventListener('click',()=>{
    document.querySelector('.lupa__hidden--input').classList.toggle('show');
    document.querySelector('.lupa__hidden--input').focus();
  })
  
  document.querySelector('.lupa__hidden--input').addEventListener('blur',()=>{
    document.querySelector('.lupa__hidden--input').classList.toggle('show');
  })  
}


export function footer(paths) {

  const footer = document.querySelector('[data-footer]');
  const logoLink = logo(paths)
  const html = `
  <section class="footer">
    <div class="container">
      <div class="logo">
        ${logoLink}
      </div>
      <div class="footer__text">
        <a href="#">Quem somos nós</a href="">
        <a href="#">Política de privacidade</a href="">
        <a href="#">Programa fidelidade</a href="">
        <a href="#">Nossas lojas</a href="">
        <a href="#">Quero ser franqueado</a href="">
        <a href="#">Anuncie aqui</a href="">
      </div>
    </div>
    <form class="footer__forms">
      <p>Fale conosco</p>
      <input type="text" placeholder="Digite seu nome" required/>
      <textarea placeholder="Escreva sua mensagem" required></textarea>
      <input type="submit" value="Enviar mensagem" class="btn__submit" data-submit />
    </form>
  </section>
  <div class="footer__dev">
  <p>Desenvolvido por Edinaldofcs</p>
  </div>
  `;

  footer.innerHTML = html;
}