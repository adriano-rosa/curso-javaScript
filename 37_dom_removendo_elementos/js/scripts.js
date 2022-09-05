// DOM - Removendo elementos

// Selecionar o elemento
var container = document.querySelector("#container"); // Elemento "pai" do html selecionado

var p = document.querySelector("#container p"); // Selecionando o elemento filho

container.removeChild(p);


// Removendo o elemento
var subtitle = document.querySelector(".subtitle"); // Seleciona o elemento - Obs: .(ponto) quando for classe

subtitle.remove();