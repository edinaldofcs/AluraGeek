import { lista } from '../../js/fakeAPI/index.js';
import { updateList } from '../../js/index.js';
import { footer, nav } from '../../js/navHeader/index.js'

window.onload = function () {

  const paths = {
    controle: "../../img/controle.png",
    alura: "../../img/alura.png",
    geek: "../../img/geek.png",
    lupa: "../../img/lupa.png",
    home: "../../../index.html",
    url: "../product/index.html",
    login: "../login/index.html",
    inputShow: true,
  }

  nav(paths);
  footer(paths);

  const img = document.querySelectorAll("#select");
  var imgPath = null;
  const file = document.querySelector("[data-imgFile]")

  img.forEach((inputFile) => {
    inputFile.addEventListener('change', (e) => {
      var fReader = new FileReader();
      fReader.readAsDataURL(inputFile.files[0]);
      fReader.onloadend = function (event) {
        imgPath = event.target.result
        file.textContent = inputFile.files[0].name
        file.classList.add('show')
      }
    })
  })
  
  const titulo = document.getElementById('categoria')
  const nome = document.getElementById('nome')
  const preco = document.getElementById('preco')
  const descricao = document.getElementById('descricao')
  const formArea = [titulo, nome, preco, descricao]

  const enviar = document.querySelector('[data-send]')
  enviar.addEventListener('click', (e) => {
    e.preventDefault();
    var send = true;
    formArea.forEach(item => {
      if (!item.value) {
        send = false;
        alert("Campos inválidos")
      }
    })
    if (!imgPath) {
      alert('sem nada');
      send = false;
    }

    if (send) {
      updateList();
      var idTemp = 0;
      var unique = true
      const num = lista.filter(lastId)

      function lastId(item) {
        if (item.titulo.toLowerCase() == titulo.value.toLowerCase()) {
          idTemp = item.produtos[item.produtos.length - 1].infos.id + 1
          unique = false;
        }
      }

      if (unique) {
        idTemp = 1;
      }

      // console.log(idTemp)

      const novoProduto = {
        titulo: titulo.value,
        produtos: [{
          infos: {
            id: idTemp,
            nome: nome.value,
            img: imgPath,
            preco: Number(preco.value).toFixed(2),
            descricao: descricao.value
          }
        }]
      }

      const produto = JSON.parse(localStorage.getItem('lista')) || []

      const add = [...produto, novoProduto]
      localStorage.setItem('lista', JSON.stringify(add))

      alert("Item adicionado com sucesso!");
      titulo.value = ''
      nome.value = ''
      preco.value = ''
      descricao.value = ''      
      file.textContent = ''
      file.classList.remove('show')

    }
  })

}