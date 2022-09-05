var idade = 16;
var nome = "Adriano";
var preMatricula = true;

if (nome === "Adriano" && idade >= 16) {
    console.log("Apto Para fazer as aulas!");
} else {
    console.log("Nome não encontrado, e idade não permitida!");
}

// Isolando operações: Executar 1ª uma validação para depois seguir para a outra.
if ((nome === "Adriano" && idade >= 16) && preMatricula === true) {
        console.log("Apto para iniciar o curso!");
}