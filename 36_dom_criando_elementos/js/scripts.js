// DOM - Criando elementos

// Criando novo paragráfo
// Selecionar o elemento
var novoParagrafo = document.createElement("p"); // cria a tag <p></p> vázia

var texto = document.createTextNode("Este é o novo do paragráfo");

novoParagrafo.appendChild(texto); // método para inserir elementos
console.log(novoParagrafo);

var body = document.querySelector("body");
body.appendChild(novoParagrafo);


// inserir em um container
var container = document.getElementById("Container"); // Seleciona o elemento
console.log(container);

var el = document.createElement("span"); // Cria o elemento

el.appendChild(document.createTextNode("texto do span")); // inserir conteúdo no span

console.log(el);

container.appendChild(el); // inserir o elento dentro do container