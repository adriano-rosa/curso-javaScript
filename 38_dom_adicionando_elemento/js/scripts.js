// DOM - Adicionando elemento
// Adicionar elemento dentro de outro
var elemen = document.createElement("div");
elemen.classList = "div-criada";
console.log(elemen);

// inserindo esse elemento div-criada
var container = document.querySelector("#container");

container.appendChild(elemen);


// Outra forma
// insertBefore - insere antes

var elemen2 = document.createElement("div"); // Criando elemento

elemen2.classList = "div-before"; // criando nova classe no elemen2

var element3 = document.querySelector("#container .div-create"); // Selecionando a div criada
console.log(element3);

container.insertBefore(elemen2, element3);


// criando mais uma div
var element4 = document.createElement("div");
element4.classList = "div-nova";

var element5 = document.querySelector("#container .div-nova");
console.log(element5);

container.insertBefore(element4, element5);