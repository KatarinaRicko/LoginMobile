const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector('.links');


navToggle.addEventListener('click', function(){
    // console.log(links.classList);
    // console.log(links.classList.contains("links"));
  
    links.classList.toggle("menu-show");

});

const mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}