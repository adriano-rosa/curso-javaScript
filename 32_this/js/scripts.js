// this ou exibe um valor do objeto ou altera o valor do objeto
let cliente = {
    codCliente: 10, 
    nome: "João",
    endereco: "Rua João Vogelsanger",
    cpf: "133521739091",
    exibeCodCliente: function () {
        console.log(this.codCliente);
    },
    validaCodCliente: function () {
        if(this.codCliente <= 0 || this.codCliente === "") {
            console.log("Código " + this.codCliente + " Inválido!");
        }
    },
    validaCpf: function() {
        if (this.cpf.length != 11) {
            console.log("CPF informado " + this.cpf + " Inválido!");
        }
    }
}

cliente.exibeCodCliente();
cliente.validaCodCliente();
cliente.validaCpf();