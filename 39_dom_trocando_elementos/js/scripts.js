// DOM - Alterando elementos

var element = document.createElement("h3"); // Criando um elemento

element.classList = "testando-classe"; // criando uma classe

var texto = document.createTextNode("Este é o texto do h3"); // criar um texto

// Adicionar texto ao elemento
element.appendChild(texto);

console.log(element);

// Selecionar o elemento a ser trocado
var title = document.querySelector("#title");
console.log(title);

// selecionar o pai do element
var paiElement = title.parentNode;

// troca os elementos
paiElement.replaceChild(element, title);

