document.addEventListener('DOMContentLoaded', function() {
    const btnExp = document.getElementById('btn-exp');
    const menuLateral = document.querySelector('.menu-lateral');
    btnExp.addEventListener('click', function() {
        menuLateral.classList.toggle('expandido');
    });
});

