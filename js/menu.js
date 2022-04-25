const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menuToggle.onclick = function(){
  navigation.classList.toggle('open');
}

const list = document.querySelectorAll('.list');
function activeLink(){
  list.forEach((item) =>
    item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) => 
  item.addEventListener('click', activeLink));

/*Efeito para brra de pesquisa*/
var box = document.querySelector(".box")
var ser_box = document.querySelector(".search-box")

box.onclick = function(){
  ser_box.classList.toggle('tamanho');
}

/*Para fixar o menu*/
window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("stick", window.scrollY>0);
})
/*para trabakhar depois*/

darkBtn.onclick = function(){
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  if(localStorage.getItem("theme") == "ligth"){
    localStorage.setItem("theme", "dark");
  }
  else{
    localStorage.setItem("theme", "ligth");
  }
}

if(localStorage.getItem("theme") == "ligth"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}
else{
  localStorage.setItem("theme", "ligth");
}