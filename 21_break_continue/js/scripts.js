// Exemplo 1 - breack
for(var i = 10; i > 0; i --) {

    console.log(i);

    if(i === 5) {
        break;
    }
}

console.log("Deu Break");

// Exemplo 2 - Continue

var x = 10;

while (x < 100) {

    x += 10;

    if (x === 60) {
        continue;
    }

    console.log("Testando o continue! " + x);
}
