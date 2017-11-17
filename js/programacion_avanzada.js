// FUNCIONES
// Ejercicio 8

function isEven(number) {
    var result;
    if(number % 2 == 0)
        result = "par"
    else
        result = "impar"
    return result;
}

number = prompt("Digite un número para saber si es par: ");
if(!isNaN(number))
    alert("Su numero es " + isEven(number));
else
    alert("No ingresaste un número");

// Ejercicio 9

function queContiene(cadena) {
    var mensaje = "La cadena \"" + cadena + "\" está formada ";
    if(cadena == cadena.toLowerCase())
        mensaje += "solo por minúsculas";
    else if(cadena == cadena.toUpperCase())
        mensaje += "solo por mayúsculas";
    else
        mensaje += "por mayúsculas y minúsculas";
    return mensaje;
}

alert(queContiene("Holi"));
alert(queContiene("holiwis"));

// Ejercicio 10

function esPalindroma(cadena) {
    var pegado = "";
    var reves = "";
    for(var i = 0; i < cadena.split("").length; i++) {
        if(cadena.split("")[i] != " ") {
            pegado += cadena.split("")[i];
        }
        if(cadena.split("").reverse()[i] != " ") {
            reves += cadena.split("").reverse()[i];
        }
    }
    /*for(var i = 0; i < cadena.split("").reverse().length; i++) {
        
    }*/
    return pegado == reves;
}

alert(esPalindroma("osito"));