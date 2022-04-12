/*Para fixar o menu*/
window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("stick", window.scrollY>0);
})

/*Para o botão toggle*/
const body = document.querySelector('body');
const togle = document.querySelector('.toggle');
togle.onclick = function(){
  togle.classList.toggle('active')
  body.classList.toggle('active')
}

var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.querySelector('.toggle');

function settingsMenuToggle(){
  settingsmenu.classList.toggle("settings-menu-height")
}

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
