/*
1.1. - Digues quins d'aquests noms de variables són correctes i quins no
*/

//1. variAble (correcte)    
//2. Variable (correcte)
//3. vari-able (incorrecte)
//4. vari_able (correcte)
//5. _variable (correcte)
//6. vari.able (incorrecte)
//7. vari4able (correcte)
//8. 4variable (incorrecte)
//9. variable4 (correcte)
//10.variable_4 (correcte)
//11.LaMevaVariable (correcte)

/* 
1.2.- Volem guardar a una variable el nom d'un empleat. Quin d'aquests noms de variable seria el més addient?
*/

//1. nomempleat (incorrecte)
//2. Nomempleat (incorrecte)
//3. NomEmpleat (incorrecte)
//4. nomEmpleat (correcte) la millor
//5. Nom_empleat (incorrecte)
//6. _NomEmpleat (incorrecte)
//7. nomEmpleat0 (incorrecte)
//8. nom_empleat (correcte) la segona millor
//9. nom0empleat (incorrecte)
//10.Nom empleat (incorrecte)

/*
2.1.- Què passaria si féssim aquestes declaracions de variables?
Pensa primer que creus que passaria. Després pots provar a executar aquestes instruccions
i veure que passa (si passa alguna cosa).
*/

//a.-
//var a = 1;
//var a = 2;
//console.log(a); //surt un 2 ja que la variable a s'ha declarat dues vegades i l'últim valor assignat és 2.

//b.-
//var a = 1;
//let a = 2;
//console.log(a); // surt un error ja que no es pot declarar una variable amb el mateix nom utilitzant let després d'haver-la declarat amb var.

//c.-
//let a = 1;
//var a = 2;
//console.log(a); // surt un error ja que no es pot declarar una variable amb el mateix nom utilitzant var després d'haver utilitzat let.

//d.-
//let a = 1;
//let a = 2;
//console.log(a); // surt error perque no permet declarar dues vegades la mateixa variable (let) en el mateix àmbit.

//3.1.- Quines d'aquestes assignacions són correctes i quines no? Tracta cada assignaciócom si fos independent.
//let a = 5; (correcte)
//let b = 5z; (incorrecte)
//let c = "c"; (correcte)
//let c = "c'; (incorrecte)
//let c = "c'c'c"; (correcte)
//let c = "c'c"c'; (incorrecte)
//let n = 35; (correcte)
//let n = 35va; (incorrecte)

//3.2.- Tenim un programa que té les assignacions que tenim a continuació. Hi ha, però, una línia errònia. Quina és? Escriu en un paper quina creus que és i desprès executa el codi.
// Fixa't en l'error que et dona el navegador.
let a = 5;
let b = c;
c = 7;