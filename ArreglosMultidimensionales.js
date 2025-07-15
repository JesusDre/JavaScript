/*
Se puede pensar que un arreglo multidimensional es como un arreglo de arreglos.
Cuando usas corchetes para acceder a un arreglo,
el primer par de corchetes hace referencia a los elementos
del arreglo más externo (el primer nivel), 
y cada par adicional va haciendo referencia a un nivel más interno.
*/
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
//Obtenemos el 8 de [7, 8, 9]