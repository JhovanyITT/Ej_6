// 6.	Filtrado de elementos en un arreglo: Crea un arreglo de 
// números y filtra los elementos para mostrar solo aquellos 
// que sean mayores que un valor dado por el usuario.

const arregloNumeros = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
var arregloNumerosFiltrados = [];
const numeroMayorQue = 55;


for(var i = 0; i < arregloNumeros.length; i++) {
    if(arregloNumeros[i] > numeroMayorQue)
        arregloNumerosFiltrados.push(arregloNumeros[i]);
}

console.log("Lista de números: " + arregloNumerosFiltrados);