const textArea = document.querySelector(".tex-tarea");
const resultado = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//Encriptar
function btnEncriptar() {
    const textoEncriptar = encriptar(textArea.value)
    resultado.value = textoEncriptar;
    textArea.value = "";
    
}

function encriptar(stringEcriptar) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEcriptar = stringEcriptar.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEcriptar.includes(matrizCodigo[i][0])) {
            stringEcriptar = stringEcriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEcriptar;
}


//Desencriptar
function btnDesencriptar() {
    const textoDesencriptar = desencriptar(textArea.value)
    resultado.value = textoDesencriptar;
    textArea.value = "";

}
 
function desencriptar(stringDesencriptar) {

    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptar = stringDesencriptar.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][0])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringDesencriptar;
}

//Copiar
btnCopiar.addEventListener('click', e => {
    resultado.select();
    document.execCommand('copy');
})