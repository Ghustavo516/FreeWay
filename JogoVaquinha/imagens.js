let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemCarro1 = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("Audio/trilha.mp3")
  somDaColisao = loadSound("Audio/colidiu.mp3")
  somDaPonto = loadSound("Audio/pontos.wav")
}