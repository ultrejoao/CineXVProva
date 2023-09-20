const geral = document.querySelector(".geral");
const menu = document.querySelector(".menu");

geral.addEventListener("click", () => {
    geral.classList.toggle('active');
    menu.classList.toggle('active');
})

var ancoras = document.querySelectorAll('a');
Array.from(ancoras).forEach(function(a) {
  a.addEventListener('click', scroll);
});

function animarScroll(atual, destino) {
  if (atual >= destino) return;
  document.body.scrollTop = atual;
  setTimeout(function() {
    animarScroll(atual += 50, destino);
  }, 50);
}

function scroll(e) {
  e.preventDefault();
  var id = this.getAttribute('href');
  var el = document.querySelector(id);
  var posicao = el.getBoundingClientRect().top;
  animarScroll(this.scrollTop, posicao);
}

/* CAROUSEL */

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count =1;
    }
    document.getElementById("radio"+count).checked = true;
}

/* ROLAGEM PAGINA */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1); // Remove o #
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth' // Rolagem suave
        });
      }
    });
  });

