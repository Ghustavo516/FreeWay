//Carro 1
let xCarros = [500, 500, 500, 500, 500, 500];
let yCarros = [40, 98, 150, 210, 270, 318];
let velocidadeCarros = [0.5, 0.3, 0.35, 0.45, 0.5, 0.2];


function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], 40, 40);
  }
}

function movimentaCarro(){
  for(let y = 0;  y < xCarros.length; y += 1){
    if(xCarros[y] < 0){
      xCarros[y] = 500;
    }
    else{
      for(let i = 0; i < xCarros.length; i += 1){
        xCarros[i] -= velocidadeCarros[i];
      }
    }
  }
}

