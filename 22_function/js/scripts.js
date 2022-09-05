/* Funçoes são blocos de códigos reutilizaveis.
   ou seja, evitamos a repetição da lógica de um 
   programa em diversas partes do código.

   A função precisa ser invocada para ser executada.
*/

// Função simples
function primeiraFuncao() {
    console.log("Hello World das funções");
}

// Invocando a função simples
primeiraFuncao();

/* -------------------------------------------------------------------- */
/* Função com argumento ou parâmetro */
function obterNome(nome) {
    
    console.log("O nome é: " + nome);

}

// Invocando|chamando a função obterNome()
obterNome("Adriano");
obterNome("Juliana");
obterNome("Victor");

/* -------------------------------------------------------------------- */
/* Função com argumento ou parâmetro */

var nomeDoBancoDeDados = "João";

obterNome(nomeDoBancoDeDados); // Pode ser passado como variável o parâmetro para uma função.
