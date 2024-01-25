let botonIncriptar = document.getElementById("incriptar");
let botonDesencriptar = document.getElementById("desencriptar");
let resultado = document.querySelector(".txt");

botonIncriptar.addEventListener("click", incriptar);
botonDesencriptar.addEventListener("click", desencriptar);

//Funciones.

function incriptar() {
  let texto = recuperarTexto();
  resultado.textContent = incriptarTexto(texto);
}

function desencriptar() {
  let texto = recuperarTexto();
  resultado.textContent = desencriptarTexto(texto);
}

function recuperarTexto() {
  let texto = document.querySelector(".cajatexto");
  return texto.value;
}

function incriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal += "ai";
    } else if (texto[i] == "e") {
      textoFinal += "enter";
    } else if (texto[i] == "i") {
      textoFinal += "imes";
    } else if (texto[i] == "o") {
      textoFinal += "ober";
    } else if (texto[i] == "u") {
      textoFinal += "ufat";
    } else {
      textoFinal += texto[i];
    }
  }

  return textoFinal;
}

function desencriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal += "a";
    } else if (texto[i] == "e") {
      textoFinal += "e";
    } else if (texto[i] == "i") {
      textoFinal += "i";
    } else if (texto[i] == "o") {
      textoFinal += "o";
    } else if (texto[i] == "u") {
      textoFinal += "u";
    } else {
      textoFinal += texto[i];
    }
  }

  return textoFinal;
}
