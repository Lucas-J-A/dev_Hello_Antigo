let el = document.getElementById('iconContainer');

toggleBtn.addEventListener('click', function () {
    (el.classList.contains("mostrar") == true) ? el.classList.remove("mostrar") : el.classList.add('mostrar');
});



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