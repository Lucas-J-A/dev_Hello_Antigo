let el = document.getElementById('iconContainer');

toggleBtn.addEventListener('click', function () {
    (el.classList.contains("show") == true) ? el.classList.remove('show') : el.classList.add('show');
});
