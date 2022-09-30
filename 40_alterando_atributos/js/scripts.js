
// selecionando a classe
var title = document.querySelector("#title");

// inserindo atributo
title.setAttribute("class", "testando-atributo");

console.log(title);

// selecionar botão 'Teste'
var btn = document.querySelector("#btn");

// desabilita o botão
btn.setAttribute("disabled", "disabled");


// alterando sub title
var subtitle = document.querySelector(".subtitle");

subtitle.setAttribute("id", "título-2");


// remover atributo

// seleciona o elemento
var lista = document.querySelector("#lista");

lista.removeAttribute("id");