let navbar = document.querySelector(".navbar");
let date = document.querySelector('.date')
let toTop = document.querySelector('.toTop')

navbar.style.transition = "all 1s linear"

window.onscroll = function () {
  if (window.scrollY > 150) {
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.right = "0";
    navbar.style.left = "0";
    navbar.style.backgroundColor = "#325dff";
    navbar.style.padding = "10px 0";
    navbar.style.zIndex ="99"
    toTop.style.display = "block"
  } else {
    navbar.style.position = "relative";
    navbar.style.backgroundColor = "transparent";
    toTop.style.display = "none"
  }
};

date.innerHTML = new Date().getFullYear();

toTop.onclick = function (){
  window.scrollTo(0 , 0)
}