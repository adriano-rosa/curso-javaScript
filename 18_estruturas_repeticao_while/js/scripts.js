
// exemplo 1
var x = 0;

while(x < 5) {

    console.log("Contando: " + x);

    // incrementador
    x ++;

}

// exemplo 2
var arr = ["a", "b", "c", "d", "e"];
var cont = 0;

while (cont <=4) {
    
    console.log("Letra: " + arr[cont]);

    //incrementador
    cont ++;

}


// exemplo 3 - Passando por cada letra de uma palavra.
var nome = "Adriano";
var contLetra = 0;

while (contLetra <=6) { // o contador sempre inicia com o zero, por isso <= 6
    
    console.log(nome[contLetra]);

    //incrementador
    contLetra ++;

}

