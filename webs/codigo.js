
const searchIcon = document.querySelector('.search-icon');
const nav = document.querySelector('nav');

searchIcon.addEventListener('click', function() {
    nav.classList.toggle('show-search');
});

document.getElementById('contactoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    alert('Formulario enviado con éxito');
});
