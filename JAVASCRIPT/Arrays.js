// 21.1.- Fes un programa que faci el següent:
// ● Defineix una variable de tipus taula, buida.
// ● Afegeixi el valor “Hola” a la posició 0.
// ● Afegeixi el valor “Adeu” a la posició 1.
// ● Escrigui a la consola el contingut de la taula
let taula = [];
taula[0] = "Hola";
taula[1] = "Adeu";
console.log(taula);

// 21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log())
// per a fer el següent:
// ● Afegeixi el valor “Nom” a la posició 2 de la taula.
// ● Escrigui a la consola el contingut de la taula.
// ● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “
// ● Escrigui a la consola el contingut de la taula.
taula[2] = "Nom";
console.log(taula);
taula[1] = ",";
console.log(taula);

// 21.3.- Fes un programa que faci el següent:
// ● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73].
// ● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula.
// ● Guardi a la posició 6 de la taula la suma dels elements
// ● Escrigui a la consola el contingut de la taula. Què passa a la posició 5?
let taula1 = [23,45,98,73];
let suma = (taula1[0] + taula1[2]);
console.log(suma);
taula1[6] = suma(taula1);
console.log(taula1);

// 21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir
// prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la
// taula a la consola.
let num = Number(prompt("Escriu número"));
let taula2 = [num*2, num*3];
console.log(taula2);

// 21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i
// emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la
// multiplicació i la divisió dels dos valors introduïts.
let num1 = Number(prompt("Escriu número"));
let num2 = Number(prompt("Escriu número"));
suma = num1 + num2;
resta = num1 - num2;
multi = num1 * num2;
div = num1 / num2;
let taula3 = [suma, resta, multi, div];

// 21.6.- Donada aquesta taula:
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
// Fes un programa que escrigui a la consola els valors situats a la primera i la darrera posició
// de la taula.
// *****
// Donada la definició d’aquesta taula:
// let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
let taula = [23,45,63,78,23,68,3,78,32,53,93,21,53,5,62,78];
console.log(taula[0]);
console.log(taula[15]);

// 21.7.- Fes un programa que escrigui a la consola tots els valors emmagatzemats a la
// taula, un a un.
for(let i = )

// 21.8.- Fes un programa que escrigui a la consola la suma tots els valors
// emmagatzemats a la taula.
// 21.9.- Fes un programa que crei una segona taula i emmagatzemi a ella tots els
// valors de la taula, tot sumant-los 25 (així les tres primeres posicions de la nova taula
// emmagatzemarien [48, 70, 88] Un cop fet haurà d’escriure la nova taula a la consola.
// 21.10.- Fes un programa que calculi la mitjana dels valors emmagatzemats a la taula
// i l’escrigui a la consola (la mitjana es calcula sumant tots els valors i dividint pel
// nombre de valors).
// 21.11.- Fes un programa que calculi i escrigui a la consola els valors més gran i més
// petit de la taula.
// 21.12.- Fes un programa que crei una nova taula on s’emmagatzemin només els
// valors parells de la taula i que escrigui el contingut d’aquesta nova taula a la consola.
// 21.13.- Fes un programa que demani a l’usuari un valor (fent servir prompt()) i
// escrigui a la consola quants cops apareix aquest valor a la taula. 


