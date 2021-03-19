/*
EJERCICIO:
1. Imprimir La lista de clase.
2. Imprimir el nombre del hij@s con padres jubilados (mayores de 65 años)

tips:
***** Buscar en google cómo recorrer objetos y arrays en javaScript o ver el video explicativo de la clase del 19/03****

Empezar por crear una función que se encargue retornar la lista de clase (nombres de los hij@s)
Recordar llamar a la función, pasándole el array "parents"

1.    recorrer array -> acceder a la "key" o "clave" children -> recorrer array -> imprimir Nombre del hijo
2.    utilizar condicionales (if)

**** Ejecutar el código escribiendo en el terminal: node app.js ****

*/

// Do not modify this code.
const ana= {
    name: 'Ana',
    age: 55,
    children: ['María']
};
const jose= {
    name: 'José',
    age: 65,
    children: ['Samuel', 'Yolanda']
};
const juan = {
    name: 'Juan',
    age: 57,
    children: ['Pablo', 'Petra', 'Marina']
};
const parents = [ana, jose, juan];

// Start your code below this line:

console.log(parents); // you can delete this if you want.