function destino() {
    var url = document.navegador.tipo.options[document.navegador.tipo.selectedIndex].value
    window.location = url;
}
window.onload = function () {
    miBody = document.getElementsByTagName("body");
    miBody[0].setAttribute("class", "fondo1");
};
