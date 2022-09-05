// parseFloat 10.0 - converte em casas decimais

console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));

// parseInt - Converte para inteiro
console.log(parseInt('10'));
console.log(parseInt(16.96));

// toFixed - Faz o arredondamento de casas decimais
console.log(23.51515165.toFixed(1));

// inNaN - Identifica o que não é number
console.log(isNaN("teste"));
console.log(isNaN(12));
console.log(isNaN("14"));

// max_value e min_value - Limitações que o javascript aceita (mínimo e máximo)
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

console.log(2.654684654654864684684684+1000);