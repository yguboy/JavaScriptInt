console.clear();

let idade = Math.floor(Math.random() * 100);

if (idade <= 13) {
    console.log("Criança Encapetada!");
} else 
    if (idade <= 18) {
    console.log("Adolescente com Tédio!");
} else 
    if (idade <= 60) {
    console.log("Adulto Chato!");
} else {
    console.log("Idoso Insuportavel!");
}