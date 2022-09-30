// callback na forma sincrona

// o objetivo do callback é, passar uma função como PARÂMETRO para outra
// que será executada após alguma resposta ser recebida

function exibir() {
    console.log("A operação resultou em: " + num);
}

function soma(a, b, callback) {
    var op = a + b;
    callback(op);
}

function multiplicacao(a, b, cb) {
    var op = a * b;
    cb(op);
}

soma(2, 2, exibir);

multiplicacao(2, 4, exibir);