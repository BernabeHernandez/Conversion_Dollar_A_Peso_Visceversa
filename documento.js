
function convertirMoneda() {
  var cantidad = parseFloat(document.getElementById("cantidad").value);
  var moneda = document.getElementById("moneda").value;
  var resultado;

  if (moneda === "pesos") {
    resultado = cantidad * 0.05;
  } else if (moneda === "dolares") {
    resultado = cantidad * 17.28;
  }

  document.getElementById("resultado").innerHTML = resultado.toFixed(2);
}
function limpiarResultados() {
  document.getElementById("cantidad").value = "";
  document.getElementById("moneda").value = "pesos";
  document.getElementById("resultado").innerHTML = "";
}