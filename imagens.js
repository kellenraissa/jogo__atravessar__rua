//Lista para as imagens e sons
let imagemCarros

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;
let somCidade;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  somCidade = loadSound("sons/city.mp3");
}