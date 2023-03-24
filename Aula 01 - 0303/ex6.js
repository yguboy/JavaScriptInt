console.log();

const tamanhoVetor = 1000;

let vetor = [];
for (let i = 0; i < tamanhoVetor; i++) {
  vetor.push(Math.floor(Math.random() * 1000));
}

vetor.sort((a, b) => a - b);

console.log(vetor);