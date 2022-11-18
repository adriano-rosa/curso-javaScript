// keydown
document.addEventListener("keydown", function(event) {

    if(event.key === "Enter") {
        console.log("Apertou Enter");
    }

});

// keyup
document.addEventListener("keyup", function(e) {
    if(e.key === "Enter") {
        console.log("Soltou o Enter");
    }

    if(e.key === "s") {
        console.log("Soltou o S");
    }
});

