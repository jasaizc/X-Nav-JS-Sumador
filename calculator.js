function changer (id, newValue) {
var element = document.getElementById(id);
element.innerHTML = newValue;
}
function sumar(){
changer("op", "5+3 = 8")
}
