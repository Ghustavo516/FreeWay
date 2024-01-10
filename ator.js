let xAtor = 100;
let yAtor = 375;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW) && yAtor >= 0){
    yAtor -= 5;
  }else if(keyIsDown(DOWN_ARROW) && yAtor <= 375){
    yAtor += 5;
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i += 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 40, 40, xAtor, yAtor, 30)
    if(colisao){
      if(meusPontos > 0){
        meusPontos -= 1;
      }
      xAtor = 100;
      yAtor = 375; 
      somDaColisao.play();
    }
  }
}

function incluiPontos(){
  textAlign(CENTER);
  fill(color(255, 240, 60))
  text(meusPontos, width / 3, 26)
  textSize(20);
}

function marcaPonto(){
  if(yAtor <= 10){
    meusPontos += 1;
    somDaPonto.play();
    yAtor = 370;
    for(let b = 0; b < velocidadeCarros.length; b += 1){
      velocidadeCarros[b] += 0.3
    }
  }
}
