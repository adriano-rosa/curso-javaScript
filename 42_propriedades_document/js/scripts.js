// Como acionar a propriedade document
// propriedade document
console.log(document.body);

console.log(document.head);


// obtendo acesso aos link´s da página
console.log(document.links[0]);

// alterando o elemento link
document.links[0].textContent = "Twitter";

// recebendo a url página
console.log(document.URL);

// acessando o title do documento
console.log(document.title);

document.title = "Aula 42";
