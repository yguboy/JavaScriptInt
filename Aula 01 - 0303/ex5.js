console.log();

let valorMaximo = 15;

let num1 = 0;
let num2 = 1;

console.log(num1);

while (num2 <= valorMaximo) {
  console.log(num2);
  let num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
}