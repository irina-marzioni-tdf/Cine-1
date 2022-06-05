function butacasRandom(recorrido: number) {
  let butacasAleatorias: boolean[] = new Array(recorrido);
  for (let indice = 0; indice < recorrido; indice++) {
    let valorButaca: boolean;
    let numeroAleatorio: number = Math.floor(Math.random() * 2);
    if (numeroAleatorio === 1) {
      valorButaca = true;
    } else {
      valorButaca = false;
    }
    butacasAleatorias[indice] = valorButaca;
  }
  return butacasAleatorias;
}

function butacasDesocupadas(butacas: boolean[], recorrido: number) {
  let desocupadas: number = 0;
  for (let indice = 0; indice < recorrido; indice++) {
    if (butacas[indice] === false) {
      desocupadas++;
    }
  }
  return desocupadas;
}

let numeroButacas: number = 150;
let butacas: boolean[] = new Array(numeroButacas);
butacas = butacasRandom(numeroButacas);
console.log(
  "Las butacas desocupadas son: ",
  butacasDesocupadas(butacas, numeroButacas)
);
