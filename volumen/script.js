let vL, vmL, vcdta, vcda, vtz, vgal; //v de variable

document.getElementById("ini").onclick = function () {
    window.location="../index.html";
}

document.getElementById("L").value=0.0;
document.getElementById("mL" ).value=0.0;
document.getElementById("cdta").value=0.0;
document.getElementById("cda").value=0.0;
document.getElementById("tz").value=0.0;
document.getElementById("gal").value=0.0;

window.onload = function () {
    miBody = document.getElementsByTagName("body");
    miBody[0].setAttribute("class", "fondo7");
};

function Carga(){   //Actualiza los campos con los datos nuevos 
    document.getElementById("L").value=vL;
    document.getElementById("mL" ).value=vmL ;
    document.getElementById("cdta").value=vcdta;
    document.getElementById("cda").value=vcda;
    document.getElementById("tz").value=vtz;
    document.getElementById("gal").value=vgal;
}
//evalua si un elemento fue cambiado y manda a llamar la función Carga()
document.getElementById("L").onchange = function() {
    var x = document.getElementById("L").value;
    vL = x
    vmL  = x * 1000;
    vcdta = x * 202.9;
    vcda = x * 67.628;
    vtz = x * 4.167;
    vgal = x * 3.785;
    Carga();
};
document.getElementById("mL").onchange = function() {
    var x = document.getElementById("mL").value;
    vL = x * 0.001;
    vmL  = x;
    vcdta = x / 4.929;
    vcda = x / 14.787;
    vtz = x / 240;
    vgal = x / 3785;
    Carga();
};
document.getElementById("cdta").onchange = function() {
    var x = document.getElementById("cdta").value;
    vL = x / 202.9;
    vmL  = x * 4.929;
    vcdta = x;
    vcda = x / 3;
    vtz = x / 48.692;
    vgal = x / 768;
    Carga();
};
document.getElementById("cda").onchange = function() {
    var x = document.getElementById("cda").value;
    vL = x / 67.628;
    vmL  = x * 14.787;
    vcdta = x * 3;
    vcda = x;
    vtz = x / 16.231;
    vgal = x / 256;
    Carga();
};
document.getElementById("tz").onchange = function() {
    var x = document.getElementById("tz").value;
    vL = x / 4.167;
    vmL  = x * 240;
    vcdta = x * 48.692;
    vcda = x * 16.231;
    vtz = x;
    vgal = x / 15.772;
    Carga();
};
document.getElementById("gal").onchange = function() {
    var x = document.getElementById("gal").value;
    vL = x * 3.785;
    vmL  = x * 3785;
    vcdta = x * 768;
    vcda = x * 256;
    vtz = x * 15.773;
    vgal = x;
    Carga();
};