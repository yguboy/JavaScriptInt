console.log();

function calcularAreaRetangulo(altura, largura) {
    let area = altura * largura;
    return area;
  }

  let altura = Math.floor(Math.random() * 100);
  let largura = Math.floor(Math.random() * 100);
  let area = calcularAreaRetangulo(altura, largura);
  console.log('A área do retângulo é:', area);