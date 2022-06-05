function butacasRandom(butacas: boolean[], recorrido: number) {
  for (let indice = 0; indice < recorrido; indice++) {
    butacas[indice] = Math.floor(Math.random() * 2);
  }
}

function butacasDesocupadas(butacas: boolean[], recorrido: number) {
  let desocupadas: number = 0;
  for (let indice = 0; indice < recorrido; indice++) {
    if (butacas[indice] === 0) {
      desocupadas++;
    }
  }
  return desocupadas;
}

let numeroButacas: number = 150;
let butacas: boolean[] = new Array(numeroButacas);
butacasRandom(butacas, numeroButacas);
console.log(
  "Las butacas desocupadas son: ",
  butacasDesocupadas(butacas, numeroButacas)
);
