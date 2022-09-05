// splice - adiciona ou remove um elemento no meio do array
var arr = [1,2,3,4,5,6];

arr.splice(3, 0, 777); // adicionou o 777
console.log(arr);

arr.splice(4, 1); // Removeu o 5 (4 é a posição do array, 1 é a qtde de elementos a eliminar)
console.log(arr);


// indexOf - Retorna o indice do elemento
console.log(arr.indexOf(5)); 


// join - transforma array em string
var arr2 = ["O", "rato", "roeu", "a", "roupa"];
console.log(arr2.join(","));


// reverse - Inverter um array 
console.log(arr2.reverse());
console.log(arr.reverse());