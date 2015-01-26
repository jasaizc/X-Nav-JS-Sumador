function changer (id, newValue) {
var element = document.getElementById(id);
element.innerHTML = newValue;
}



function sumar(){
    p = document.getElementById('op');
    resultado = p.innerHTML.split("+",2);
    result= parseInt(resultado[0]) + parseInt(resultado[1])
    changer("op", result)
}

function sumarAleatoria(){
    p = document.getElementById('Aleatorio');
    primervalor = aleatorio(0,1000000);
    segundovalor = aleatorio(0,1000000);
    result= primervalor + segundovalor;
    changer("Aleatorio", primervalor + " + " + segundovalor + " = " + result)
}
function aleatorio(inferior,superior){
    var numPosibilidades = superior - inferior
    var aleat = Math.random() * numPosibilidades
    aleat = Math.round(aleat)
    return parseInt(inferior) + aleat
} 
