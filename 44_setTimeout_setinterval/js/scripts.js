/*O método setTimeout permite executar um código após um tempo estipulado, 
que pode ser definido em milissegundos. */

// setTimeout - função assincrona
console.log("Antes do setTimeout");

setTimeout(function() {
    console.log("Testando o setTimeout");
}, 2000);

console.log("Depois do setTimeout");


/*Nesta documentação de JavaScript veremos como o método setInterval() 
nos permite executar uma função repetidamente em um espaço de tempo definido.*/
// setInterval
setInterval(function() {
    console.log("Testando o setInterval");
}, 1000);