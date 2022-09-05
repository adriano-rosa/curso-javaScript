
// Let proporciona poder alterar o valor de uma variável em diferentes trechos do código.
let x = 5;

// Variáveis constantes não podem ser alteradas no código.
const y = 10;
console.log(y);

x = 12;

if(true) {

    let x = 20;

    console.log(x);

    // Variável y dentro do escopo(variável local)
    const y = 50;
    console.log(y);

}

console.log(x);