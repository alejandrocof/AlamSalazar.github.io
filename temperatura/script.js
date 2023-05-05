let vC, vF, vK; //v de variable

document.getElementById("ini").onclick = function () {
    window.location="../index.html";
}

document.getElementById("C").value=0.0;
document.getElementById("F" ).value=0.0;
document.getElementById("K").value=0.0;

window.onload = function () {
    miBody = document.getElementsByTagName("body");
    miBody[0].setAttribute("class", "fondo6");
    
};

function Carga(){   //Actualiza los campos con los datos nuevos 
    document.getElementById("C").value=vC;
    document.getElementById("F" ).value=vF ;
    document.getElementById("K").value=vK;
}
//evalua si un elemento fue cambiado y manda a llamar la función Carga()
document.getElementById("C").onchange = function() {
    var x = parseFloat(document.getElementById("C").value);
    vC = x;
    vF  = (x*(9/5))+32;
    vK = x+273.15;
    Carga();
};
document.getElementById("F").onchange = function() {
    var x = parseFloat(document.getElementById("F").value);
    vC = (x-32)*(5/9);
    vF  = x;
    vK =  ((x-32)*(5/9))+273.15;
    Carga();
};
document.getElementById("K").onchange = function() {
    var x = parseFloat(document.getElementById("K").value);
    vC = x-273.15;
    vF  = (x-273.15)*(9/5)+32;
    vK = x;
    Carga();
};
