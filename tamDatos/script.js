let vbit, vB, vKB, vMB, vGB, vTB; //v de variable

document.getElementById("ini").onclick = function () {
    window.location="../index.html";
}

document.getElementById("bit").value=0.0;
document.getElementById("B" ).value=0.0;
document.getElementById("KB").value=0.0;
document.getElementById("MB").value=0.0;
document.getElementById("GB").value=0.0;
document.getElementById("TB").value=0.0;

window.onload = function () {
    miBody = document.getElementsByTagName("body");
    miBody[0].setAttribute("class", "fondo5");
};

function Carga(){   //Actualiza los campos con los datos nuevos 
    document.getElementById("bit").value=vbit;
    document.getElementById("B" ).value=vB ;
    document.getElementById("KB").value=vKB;
    document.getElementById("MB").value=vMB;
    document.getElementById("GB").value=vGB;
    document.getElementById("TB").value=vTB;
}
//evalua si un elemento fue cambiado y manda a llamar la función Carga()
document.getElementById("bit").onchange = function() {
    var x = parseFloat(document.getElementById("bit").value);
    vbit= x
    vB  = x / 8;
    vKB = x / 8000;
    vMB = x / 8000000;
    vGB = x / 8000000000;
    vTB = x / 8000000000000;
    Carga();
};
document.getElementById("B").onchange = function() {
    var x = parseFloat(document.getElementById("B").value);
    vbit= x * 8;
    vB  = x;
    vKB = x / 1000;
    vMB = x / 1000000;
    vGB = x / 1000000000;
    vTB = x / 1000000000000;
    Carga();
};
document.getElementById("KB").onchange = function() {
    var x = parseFloat(document.getElementById("KB").value);
    vbit= x * 8000;
    vB  = x * 1000;
    vKB = x;
    vMB = x / 1000;
    vGB = x / 1000000;
    vTB = x / 1000000000;
    Carga();
};
document.getElementById("MB").onchange = function() {
    var x = parseFloat(document.getElementById("MB").value);
    vbit= x * 8000000;
    vB  = x * 1000000;
    vKB = x * 1000;
    vMB = x;
    vGB = x / 1000;
    vTB = x / 1000000;
    Carga();
};
document.getElementById("GB").onchange = function() {
    var x = parseFloat(document.getElementById("GB").value);
    vbit= x * 8000000000;
    vB  = x * 1000000000;
    vKB = x * 1000000;
    vMB = x * 1000;
    vGB = x;
    vTB = x / 1000;
    Carga();
};
document.getElementById("TB").onchange = function() {
    var x = parseFloat(document.getElementById("TB").value);
    vbit= x * 8000000000000;
    vB  = x * 1000000000000;
    vKB = x * 1000000000;
    vMB = x * 1000000;
    vGB = x * 1000;
    vTB = x;
    Carga();
};