var bolas = document.querySelector('.bolas')
var quant = document.querySelectorAll('.slides .image')
var atual = 0
var image = document.getElementById('atual')
var next = document.getElementById('next')
var voltar = document.getElementById('voltar')
var rolar = true

for(let i=0; i < quant.length; i++){
  var div = document.createElement('div')
  div.id = i
  bolas.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.bolas div')

for(let i=0; i < pos.length; i++){
  pos[i].addEventListener('click', ()=>{
    atual = pos[i].id
    rolar = false
    slides()
  })
}

voltar.addEventListener('click', ()=>{
  atual--
  rolar = false
  slides()
})

next.addEventListener('click', ()=>{
  atual++
  rolar = false
  slides()
})

function slides(){
  if(atual >= quant.length){
    atual = 0
  }
  else if(atual < 0){
    atual = quant.length-1
  }
  document.querySelector('.imgAtual').classList.remove('imgAtual')
  image.style.marginLeft = -1400*atual+'px'
  document.getElementById(atual).classList.add('imgAtual')
}
setInterval(()=>{
  if(rolar){
    atual++
    slides()
  }
  else{
    rolar = true
  }
},10000)