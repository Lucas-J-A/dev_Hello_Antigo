let el = document.getElementById('iconContainer');

toggleBtn.addEventListener('click', function () {
    (el.classList.contains("show") == true) ? el.classList.remove('show') : el.classList.add('show');
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