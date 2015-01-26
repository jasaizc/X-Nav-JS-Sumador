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
