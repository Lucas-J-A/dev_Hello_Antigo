//Carrousel

const slides = document.querySelectorAll('[data-js="carousel__item"]')
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')
const lastSlideIndex = slides.length - 1
let currentSlideIndex = 0
const manipulateSlidesClasses = correctSlideIndex => {
    slides.forEach(slide => slide.classList.remove('carousel__item--visible'))
    slides[correctSlideIndex].classList.add('carousel__item--visible')
}
nextButton.addEventListener('click', () => {
    const correctSlideIndex = currentSlideIndex === lastSlideIndex ? currentSlideIndex = 0 : ++currentSlideIndex
    manipulateSlidesClasses(correctSlideIndex)
})

prevButton.addEventListener('click', () => {

    const correctSlideIndex = currentSlideIndex === 0 ? lastSlideIndex = slides.length - 1 : --currentSlideIndex
    manipulateSlidesClasses(correctSlideIndex)

})
//função para aparecer e esconder redes sociais !
let el = document.getElementById('iconContainer');
toggleBtn.addEventListener('click', function () {
    (el.classList.contains("mostrar") == true) ? el.classList.remove("mostrar") : el.classList.add('mostrar');
});


//Acordeon para aparecer os elementos 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//função para movimentar parte do site 

//função para movimentar parte do site 
function irParaMeuLocal(origem, destino) {

    var value = document.getElementById("navbarTogglerDemo02");

    value.classList.remove('show');

    // Obtenha a posição do topo da página
    var posicaoTopo = document.getElementById(origem).offsetTop;// posição atual 

    // Obtenha a posição do topo do elemento desejado
    var elemento = document.getElementById(destino); //posição para deslocar
    var posicaoElemento = elemento.offsetTop;

    // Calcule a quantidade de rolagem necessária
    var quantidadeRolagem = posicaoElemento - posicaoTopo;

    // Role a página até essa posição
    window.scrollTo({
        top: quantidadeRolagem,
        behavior: "smooth" // Isso faz a rolagem suave
    });

}

// inicialização carrousel

const myCarouselElement = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
})

