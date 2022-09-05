// objeto
let pessoa = {
    nome: "Adriano",
    idade: 29, 
    // método
    falar: function() {
        console.log("Olá, tudo bem?");
    },
    // método
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(2, 2);
console.log(soma);