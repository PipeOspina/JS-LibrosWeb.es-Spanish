var mensaje = "Hola mundo!\nQue facil es incluir \'Comillas Simples\'\ny \"Comillas Dobles\"";

var meses = ["Enero", "Febreo", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//Arroja cuadros de dialogo con sus respectivos mensajes
alert(mensaje);
alert("Soy el primer script :)");
alert(meses);


var valores = [true, 5, false, "hola", "adios", 2];
var resultado;
//Se compara "hola" y "adios", se compara letra por letra (a es menor que b menor que c) y las mayusculas son menores que las minusculas (A es menor que a y B es menor que a)
resultado = valores[3] < valores[4];
alert(resultado); // false

resultado = valores[0] && valores[2];
alert(resultado); // false
resultado = valores[0] || valores[2];
alert(resultado); // true

resultado = valores[1] + valores[5]; // Suma = 7
resultado = valores[1] - valores[5]; // Resta = 3
resultado = valores[1] * valores[5]; // Multiplicación = 10
resultado = valores[1] / valores[5]; // División = 2,5
resultado = valores[1] % valores[5]; // Modulo = 1

var numero1 = 5;
var numero2 = 8;
 
if(numero1 < numero2) {
  alert("numero1 no es mayor que numero2");
}
if(numero2 >= 0) {
  alert("numero2 es positivo");
}
if(numero1 < 0) {
  alert("numero1 es negativo o distinto de cero");
}
if(++numero1 < numero2) {
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDNI = prompt("Digite su numero de DNI: ");
var letraDNI = prompt("Digite la letra de su DNI (Asegurese que sea en Mayuscula): ");

if(numeroDNI >= 0 && numeroDNI <= 99999999) {
    var letra = letras[numeroDNI % 23]
    if(letra == letraDNI) {
        alert("Su número y letra de DNI son correctos :)");
    } else {
        alert("Su número y letra de DNI son incorrectos :(");
    }
} else {
    alert("El número de DNI que ingresaste no es valido");
}