// Exemplo de um problema ao acessar uma classe pelo DOM 
var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);
// Neste exemplo acima, retorna todos os elementos da lista


// Acessar o DOM por querySelector
// querySelectorAll - para mais de um elemento
var itensQuery = document.querySelectorAll('#lista2 li'); // retorna os últimos 4
console.log(itensQuery);


var itensQuery2 = document.querySelectorAll('#lista li'); // retorna os 4 primeiros
console.log(itensQuery2);


// querySelector
var lista = document.querySelector('#lista'); // Retorna somante o primeiro elemento da lista
console.log(lista);
