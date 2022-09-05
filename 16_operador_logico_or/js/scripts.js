var idade = 16;
var nome = "Adriano";
var bolsista = true;

if (nome === "Adriano" || idade >= 16) {
    console.log("Pode realizar o curso!");
} else if (bolsista === true) {
    console.log("Entra na lista de espera!");
} else {
    console.log("Não pode realizar o curso!");
}


// Outro exemplo:
if ((nome === "Adriano" || idade >= 16) && bolsista === true) {
    console.log("Entrou na validação!");
} else {
    console.log("Não entrou na validação!");
}