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