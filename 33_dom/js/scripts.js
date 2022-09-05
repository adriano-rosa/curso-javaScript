// DOM - Manipulação de propiredades HTML no javascript
// DOM - Fornece uma cópia do HTML, quando alterado, ele altera o HTML

// Acessar o DOM por tag
// Sempre acessa o elemento por - document
// Acessar um elemento pelo nome da tag
// método no plural, pega mais de uma tag.
var titulo = document.getElementsByTagName('h1')[0]; // com o [0] retorna a primeira tag.
console.log(titulo);                                 // retorna a tag <h1>Título Principal</h1>

var lis = document.getElementsByTagName('li');
console.log(lis[3]);  


// --------------------------------------------------- //
// Acessar o DOM por id
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);


// --------------------------------------------------- //
// Acessar o DOM por class
var itensLista = document.getElementsByClassName('item');
console.log(itensLista);
