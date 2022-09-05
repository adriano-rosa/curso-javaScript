
//Hoisting  -içamento | "joga" as variáveis sempre para o topo do código.
                        // se não houver atribuição retorna undefined
console.log(sobrenome);
var nome = null;
var sobrenome = undefined;

console.log(nome);
console.log(sobrenome);

nome = "Adriano";
console.log(nome);