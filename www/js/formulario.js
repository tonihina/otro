var slider = document.getElementById("peso");
var output = document.getElementById("valor");
var mostrarPeso = document.getElementById("datoPeso");

output.innerHTML = slider.value + " KG";


slider.oninput = function() {
  output.innerHTML = this.value + " KG";
  mostrarPeso.style.visibility="visible";
}

var rangoAltura = document.getElementById("altura");
var salida = document.getElementById("salidaAltura");
var mostrarAltura = document.getElementById("datoAltura");

salida.innerHTML = rangoAltura.value + " CM";


rangoAltura.oninput = function() {
    salida.innerHTML = this.value + " CM";
    mostrarAltura.style.visibility="visible";
}

