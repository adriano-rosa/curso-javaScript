// length - Propriedade que retorna a qtde de elementos de um array
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.length);


// push - Adiciona elementos no fim do um array
arr.push(8);
arr.push("nove");

console.log(arr);

// pop - remove o último elemento do array
arr.pop(arr);
console.log(arr);


// unshift - Adiciona elementos no início do array
arr.unshift(0);
arr.unshift("começo");
console.log(arr);


// shift - Remove o primeiro elemento de um array
arr.shift();
console.log(arr);


// acessar o último elemento de um array
console.log(arr[arr.length - 1]);


// isArray - identifica se é um array
console.log(Array.isArray(5));   // false

console.log(Array.isArray(arr)); // true

