let vkm, vm, vcm, vmm, vin, vft; //v de variable

document.getElementById("ini").onclick = function () {
    window.location="../index.html";
}
document.getElementById("km").value=0.0;
document.getElementById("m" ).value=0.0;
document.getElementById("cm").value=0.0;
document.getElementById("mm").value=0.0;
document.getElementById("in").value=0.0;
document.getElementById("ft").value=0.0;

window.onload = function () {
    miBody = document.getElementsByTagName("body");
    miBody[0].setAttribute("class", "fondo2");
};

function Carga(){   //Actualiza los campos con los datos nuevos 
    document.getElementById("km").value=vkm;
    document.getElementById("m" ).value=vm ;
    document.getElementById("cm").value=vcm;
    document.getElementById("mm").value=vmm;
    document.getElementById("in").value=vin;
    document.getElementById("ft").value=vft;
}
//evalua si un elemento fue cambiado y manda a llamar la función Carga()
document.getElementById("km").onchange = function() {
    var x = parseFloat(document.getElementById("km").value);
    vkm = x;
    vm  = x * 1000;
    vcm = x * 100000;
    vmm = x * 1000000;
    vin = x * 39370;
    vft = x * 3281;
    Carga();
};
document.getElementById("m").onchange = function() {
    var x = parseFloat(document.getElementById("m").value);
    vkm = x * 0.001;
    vm  = x;
    vcm = x * 100;
    vmm = x * 1000;
    vin = x * 39.3701;
    vft = x * 3.28084;
    Carga();
};
document.getElementById("cm").onchange = function() {
    var x = parseFloat(document.getElementById("cm").value);
    vkm = x * 0.00001;
    vm  = x * 0.01;
    vcm = x;
    vmm = x * 10;
    vin = x * 2.54;
    vft = x * 30.48;
    Carga();
};
document.getElementById("mm").onchange = function() {
    var x = parseFloat(document.getElementById("mm").value);
    vkm = x * 0.00000001;
    vm  = x * 0.001;
    vcm = x * 0.1;
    vmm = x;
    vin = x * 25.4;
    vft = x * 304.8;
    Carga();
};
document.getElementById("in").onchange = function() {
    var x = parseFloat(document.getElementById("in").value);
    vkm = x / 39370;
    vm  = x / 39.37;
    vcm = x * 2.54;
    vmm = x * 25.4;
    vin = x;
    vft = x / 12;
    Carga();
};
document.getElementById("ft").onchange = function() {
    var x = parseFloat(document.getElementById("ft").value);
    vkm = x / 3281;
    vm  = x / 3.281;
    vcm = x * 30.48;
    vmm = x * 304.8;
    vin = x * 12;
    vft = x;
    Carga();
};