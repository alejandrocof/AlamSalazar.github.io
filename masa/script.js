let vtn, vkg, vg, vmg, vlb, voz; //v de variable

document.getElementById("ini").onclick = function () {
    window.location="../index.html";
}

document.getElementById("tn").value=0.0;
document.getElementById("kg" ).value=0.0;
document.getElementById("g").value=0.0;
document.getElementById("mg").value=0.0;
document.getElementById("lb").value=0.0;
document.getElementById("oz").value=0.0;

window.onload = function () {
    miBody = document.getElementsByTagName("body");
    miBody[0].setAttribute("class", "fondo3");
};

function Carga(){   //Actualiza los campos con los datos nuevos 
    document.getElementById("tn").value=vtn;
    document.getElementById("kg" ).value=vkg ;
    document.getElementById("g").value=vg;
    document.getElementById("mg").value=vmg;
    document.getElementById("lb").value=vlb;
    document.getElementById("oz").value=voz;
}
//evalua si un elemento fue cambiado y manda a llamar la función Carga()
document.getElementById("tn").onchange = function() {
    var x = parseFloat(document.getElementById("tn").value);
    vtn = x;
    vkg  = x * 1000;
    vg = x * 1000000;
    vmg = x * 1000000000;
    vlb = x * 2205;
    voz = x * 35274;
    Carga();
};
document.getElementById("kg").onchange = function() {
    var x = parseFloat(document.getElementById("kg").value);
    vtn = x * 0.001;
    vkg  = x;
    vg = x * 1000;
    vmg = x * 1000000;
    vlb = x * 2.20462;
    voz = x * 35.274;
    Carga();
};
document.getElementById("g").onchange = function() {
    var x = parseFloat(document.getElementById("g").value);
    vtn = x * 0.000001;
    vkg  = x / 1000;
    vg = x;
    vmg = x * 1000;
    vlb = x / 453.6;
    voz = x / 28.35;
    Carga();
};
document.getElementById("mg").onchange = function() {
    var x = parseFloat(document.getElementById("mg").value);
    vtn = x * 0.0000000001;
    vkg  = x * 0.000001;
    vg = x * 0.001;
    vmg = x;
    vlb = x / 453600;
    voz = x / 28350;
    Carga();
};
document.getElementById("lb").onchange = function() {
    var x = parseFloat(document.getElementById("lb").value);
    vtn = x / 2205;
    vkg  = x / 2.205;
    vg = x * 453.6;
    vmg = x * 453600;
    vlb = x;
    voz = x / 16;
    Carga();
};
document.getElementById("oz").onchange = function() {
    var x = parseFloat(document.getElementById("oz").value);
    vtn = x / 35270;
    vkg  = x / 35.274;
    vg = x * 28.35;
    vmg = x * 28350;
    vlb = x * 16;
    voz = x;
    Carga();
};