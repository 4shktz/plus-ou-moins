let rdmNbr = Math.floor(Math.random() * 101);
let userNbr;

console.log(rdmNbr);

do {
    userNbr = parseInt(prompt("Donne moi un nombre"));
    if (isNaN(userNbr)) {
        alert("Veuillez entrer uniquement des nombres!");
    } else if (userNbr < rdmNbr) {
        alert("Plus!");
    } else if (userNbr > rdmNbr) {
        alert("Moins!");
    }
} while (userNbr !== rdmNbr);

alert("gg ez " + "ct " + rdmNbr);