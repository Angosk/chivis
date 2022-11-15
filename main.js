const inOutReal = document.getElementById("real")
const inOutAux = document.getElementById("aux")
// const inOutAnual = document.getAnimations("anual_mas_5")
const inOutMensual = document.getElementById("mensual")
const inOutIva = document.getElementById("iva")
const inOutEntero = document.getElementById("mes_mas_iva")
const inOutDif = document.getElementById("dif_real-aux")

let real;
let aux;
let mes;
let iva;
let entero;
let dif;


function calcular() {
    console.log("click")
    real = inOutReal.value;
    real = parseInt(real)
    aux = inOutAux.value;
    aux = parseInt(aux)
    mes = (aux + (aux / 20)) / 12;
    iva = mes * (4 / 25);
    entero = (mes + iva);
    entero = Number.parseFloat(entero).toFixed(2);
    dif = real - aux;

    inOutMensual.value = mes;
    inOutIva.value = iva;
    inOutEntero.value = entero;
    inOutDif.value = dif;
}

function recalcular() {
    console.log("otro C")
    let valor = inOutEntero.value;
    valor = parseInt(valor)
    while (entero < valor) {
        mes = (aux + (aux / 20)) / 12
        iva = mes * (4 / 25);
        aux = aux + 0.1
        entero = (mes + iva)
        dif = real - aux;
    }
    inOutMensual.value = mes;
    inOutIva.value = iva;
    inOutEntero.value = entero;
    inOutDif.value = dif;
    inOutAux.value = aux
    inOutDif.value = dif
}



