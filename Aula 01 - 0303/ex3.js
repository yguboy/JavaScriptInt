console.log();

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);


let maior, menor;
  if (num1 > num2) {
      maior = num1;
      menor = num2;
} 
  else {
      maior = num2;
      menor = num1;
}

console.log("O número maior é: " + maior);
console.log("O número menor é: " + menor);