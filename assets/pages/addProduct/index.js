import { lista } from '../../js/fakeAPI/index.js';
import { updateList } from '../../js/index.js';
import { footer, nav } from '../../js/navHeader/index.js'

function ExibirMensagem(classe) {
  const msg = document.querySelector('[data-msg]');
  if (classe == "msg--enviar") {
    msg.innerHTML = "Cadastrado com sucesso";
  } else {
    msg.innerHTML = "Existem Campos em branco";
  }
  
  msg.classList.add(classe);
  setTimeout(() => {
    msg.classList.remove(classe);
  }, 1500);
}

function escolherId(titulo) {
  updateList();
  var id = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].titulo.toLowerCase() == titulo.value.toLowerCase()) {
      id = lista[i].produtos[lista[i].produtos.length - 1].infos.id + 1
      break;
    }
  }

  if(id === 0){
    id = 1;
  }
  return id;
}

function limparCampos() {
  document.getElementById('categoria').value = '';
  document.getElementById('alt').value = '';
  document.getElementById('nome').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('descricao').value = '';
  const file = document.querySelector("[data-imgFile]");
  file.textContent = '';
  file.classList.remove('show');
}

window.onload = function () {

  const titulo = document.getElementById('categoria');
  const alt = document.getElementById('alt');
  const nome = document.getElementById('nome');
  const preco = document.getElementById('preco');
  const descricao = document.getElementById('descricao');
  const img = document.querySelectorAll("#select");;
  const file = document.querySelector("[data-imgFile]");
  const enviar = document.querySelector('[data-send]');

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

  var imgPath = null;

  img.forEach((inputFile) => {
    inputFile.addEventListener('change', (e) => {
      var fReader = new FileReader();
      fReader.readAsDataURL(inputFile.files[0]);
      fReader.onloadend = function (event) {
        imgPath = event.target.result;
        file.textContent = inputFile.files[0].name;
        file.classList.add('show');
      }
    })
  })


  enviar.addEventListener('click', (e) => {
    e.preventDefault();
    const formArea = [titulo.value, nome.value, preco.value, descricao.value, alt.value, imgPath];
    var send = true;

    for (let i in formArea) {
      if (!formArea[i]) {
        ExibirMensagem('msg--erro');
        send = false;
        break;
      }
    }


    if (send) {
      var newId = escolherId(titulo);

      const novoProduto = {
        titulo: titulo.value,
        produtos: [{
          infos: {
            id: newId,
            nome: nome.value,
            img: imgPath,
            preco: Number(preco.value).toFixed(2),
            descricao: descricao.value,
            alt: alt.value,
          }
        }]
      }

      const produto = JSON.parse(localStorage.getItem('lista')) || [];
      const add = [...produto, novoProduto];
      localStorage.setItem('lista', JSON.stringify(add));

      ExibirMensagem('msg--enviar');

      limparCampos();
    }
  })

}


