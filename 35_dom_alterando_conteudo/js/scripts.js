// DOM - Alterando conteúdo

// 1 º - Sempre selecionar o elemento
var title = document.querySelector('#title');

// 1ª Maneira de alterar o conteúdo.
// innerHTML
title.innerHTML = "Testando o texto alterado";


// 2ª Maneira de alterar o conteúdo.
// textContent -> Mais utilizado, recomendado, performático
var subtitle = document.querySelector(".subtitle"); // o .(ponto) acessa a classe como no CSS

console.log(subtitle);

subtitle.textContent = "Testando o textContent";

