const forward = (parentElement, child,index) => {
  var items = document.querySelectorAll(child)
  var gapSize = items[0].getBoundingClientRect()

  let parent = document.querySelectorAll(parentElement)
  parent = parent[index]

  var scroll = {
    fixed: parent.scrollLeft,
    change: parent.scrollLeft
  }
  let gap = items[1].getBoundingClientRect().left - gapSize.left - gapSize.width

  const stop = setInterval(start, 1);

  function start() {
    if (scroll.change <= gapSize.width + scroll.fixed + gap) {
      let velocity = 2;
      scroll.change += velocity;
      parent.scroll(scroll.change, 0)
    } else {
      clearInterval(stop);
    }
  }
}

const backward = (parentElement, child,index) => {

  let parent = document.querySelectorAll(parentElement)
  parent = parent[index]

  let items = document.querySelectorAll(child)
  let gapSize = items[0].getBoundingClientRect()

  let scroll = {
    leftBar: parent.scrollLeft,
    size: gapSize.width,
    gap: - (items[1].getBoundingClientRect().left - gapSize.left - gapSize.width)
  }

  const stop = setInterval(rodar, 1);

  function rodar() {
    if (scroll.leftBar > 0 && scroll.size > scroll.gap) {
      let velocity = 2;
      scroll.leftBar -= velocity;
      scroll.size -= velocity;
      parent.scroll(scroll.leftBar, 0)
    } else {
      clearInterval(stop);
    }
  }
}

export const slider = ()=>{
  document.querySelectorAll('.avancar').forEach((el,index)=>{
    el.addEventListener('click', () => forward(".cards", ".content__card",index));
  })
  document.querySelectorAll('.voltar').forEach((el,index)=>{
  el.addEventListener('click', () => backward(".cards", ".content__card",index))
  })
}
