
// para steps do formulario
var currentStep = 1;
var totalSteps = 3;

function nextStep() {
    if (currentStep < totalSteps) {
        var currentSection = document.getElementById("step" + currentStep);
        currentSection.style.display = "none";

        currentStep++;

        var nextSection = document.getElementById("step" + currentStep);
        nextSection.style.display = "block";
    }
}

function previousStep() {
    if (currentStep > 1) {
        var currentSection = document.getElementById("step" + currentStep);
        currentSection.style.display = "none";

        currentStep--;

        var previousSection = document.getElementById("step" + currentStep);
        previousSection.style.display = "block";
    }
}

function submitForm() {
    // Lógica para enviar o formulário
    document.getElementById("myForm").submit();
}



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

//função para aparecer e esconder redes sociais !
let el = document.getElementById('iconContainer');
toggleBtn.addEventListener('click', function () {
    (el.classList.contains("mostrar") == true) ? el.classList.remove("mostrar") : el.classList.add('mostrar');
});

