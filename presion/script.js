let vatm, vbar, vpsi, vPA, vTorr; //v de variable

document.getElementById("ini").onclick = function () {
    window.location="../index.html";
}

document.getElementById("atm").value=0.0;
document.getElementById("bar" ).value=0.0;
document.getElementById("psi").value=0.0;
document.getElementById("PA").value=0.0;
document.getElementById("Torr").value=0.0;

window.onload = function () {
    miBody = document.getElementsByTagName("body");
    miBody[0].setAttribute("class", "fondo4");  
};

function Carga(){   //Actualiza los campos con los datos nuevos 
    document.getElementById("atm").value=vatm;
    document.getElementById("bar").value=vbar;
    document.getElementById("psi").value=vpsi;
    document.getElementById("PA").value=vPA;
    document.getElementById("Torr").value=vTorr;
}
//evalua si un elemento fue cambiado y manda a llamar la función Carga()
document.getElementById("atm").onchange = function() {
    var x = parseFloat(document.getElementById("atm").value);
    vatm = x;
    vbar = x * 1.013;
    vpsi = x * 14.696;
    vPA = x * 101300;
    vTorr = x * 760;
    Carga();
};
document.getElementById("bar").onchange = function() {
    var x = parseFloat(document.getElementById("bar").value);
    vatm = x / 1.013;
    vbar = x;
    vpsi = x * 14.504;
    vPA = x * 100000;
    vTorr = x * 750.1;
    Carga();
};
document.getElementById("psi").onchange = function() {
    var x = parseFloat(document.getElementById("psi").value);
    vatm = x / 14.696;
    vbar = x / 14.504;
    vpsi = x;
    vPA = x * 6895;
    vTorr = x * 51.715;
    Carga();
};
document.getElementById("PA").onchange = function() {
    var x = parseFloat(document.getElementById("PA").value);
    vatm = x / 101300;
    vbar = x / 100000;
    vpsi = x / 6895;
    vPA = x;
    vTorr = x / 133.3;
    Carga();
};
document.getElementById("Torr").onchange = function() {
    var x = parseFloat(document.getElementById("Torr").value);
    vatm = x / 760;
    vbar = x / 750.1;
    vpsi = x / 51.715;
    vPA = x * 133.3;
    vTorr = x;
    Carga();
};