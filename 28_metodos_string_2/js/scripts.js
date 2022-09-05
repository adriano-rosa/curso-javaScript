// toLowerCase e toUpperCase
var frase = "Esta é a frase que vamos manipular";
console.log(frase.toLowerCase()); //transforma tudo em minúscula

var fraseCaixaAlta = frase.toLocaleUpperCase();
console.log(fraseCaixaAlta); //transforma tudo em maiúscula


// trim - Elimina espaços vazios na string/texto
var nome = "    Adriano            ";

nome = nome.trim();
console.log(nome);


// split - Transforma um texto em um array - Tanto para receber ou enviar para o back
console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";
console.log(tags.split(", "));

// lastIndexOf - Retorna o indice da última palavra de um string/texto
var outraFrase = "Eu quero a última palavra teste da frase com duas palavras teste agora.";
console.log(outraFrase.lastIndexOf("teste")); // retorna o indice da última palavra
console.log(outraFrase.indexOf("teste"));     // retorna o indice da primeira palavra