//SELECTORES//
var headmenu = document.querySelector('#headmenu');
var menumovil = document.querySelector('#menumovil');

//EVENTOS//
headmenu.addEventListener('click', function () {
    menumovil.classList.toggle("menumovilshow");
});
