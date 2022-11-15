const inOutReal = document.getElementById("real")
const inOutAux = document.getElementById("aux")
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
    real = inOutReal.value;
    real = Number.parseFloat(real);
    aux = inOutAux.value;
    aux = Number.parseFloat(aux);
    mes = aux / 12;
    mes = Number.parseFloat(mes);
    iva = mes * 0.16;
    iva = Number.parseFloat(iva);
    entero = (mes + iva);
    entero = Number.parseFloat(entero);
    dif = real - aux;
    dif = Number.parseFloat(dif);

    impValues()
}

function recalcular() {
    let valor = inOutEntero.value;
    valor = Number.parseFloat(valor);
    if (entero < valor) {
        while (entero < valor) {
            aux = Number.parseFloat(aux);
            aux = aux + 0.1
            mes = aux / 12;
            mes = Number.parseFloat(mes);
            iva = mes * 0.16;
            iva = Number.parseFloat(iva);
            entero = (mes + iva);
            entero = Number.parseFloat(entero);
            dif = real - aux;
            dif = Number.parseFloat(dif);
        }
    } else {
        while (entero > valor) {
            aux = Number.parseFloat(aux);
            aux = aux - 0.1
            mes = aux / 12;
            mes = Number.parseFloat(mes);
            iva = mes * 0.16;
            iva = Number.parseFloat(iva);
            entero = (mes + iva);
            entero = Number.parseFloat(entero);
            dif = real - aux;
            dif = Number.parseFloat(dif);
        }
    }
    aux = Number.parseFloat(aux).toFixed(2);
    inOutAux.value = aux;
    impValues();
}

function impValues(){
    mes = Number.parseFloat(mes).toFixed(2);
    iva = Number.parseFloat(iva).toFixed(2);
    entero = Number.parseFloat(entero).toFixed(2);
    dif = Number.parseFloat(dif).toFixed(2);

    inOutMensual.value = mes;
    inOutIva.value = iva;
    inOutEntero.value = entero;
    inOutDif.value = dif;
}