//cria o "backwork" nas dimensões desejada.
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

//variáveis da bolinha.
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha.
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

//variáveis da raquete.
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente.
let xRaquete2 = 585;
let yRaquete2 = 150;


//verifica se houve colisão;
let colidiu = false;

//placar do jogo.
let pontosP1 = 0;
let pontosP2 = 0;


//variáveis de sons do jogo.
let raquetada;
let ponto;
let trilha;

//variável para resolver o bug na raquete. by Lais.
let bolinhanaoFicaPresa;

//faz a chamada de cada som específico.
function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaquete2, yRaquete2); 
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  movimentaRaquete2();
  colisaoRaquete2Biblioteca();
  incluiPlacar();
  marcaPonto();
}

function zerarPlacar(){
  if (pontosP1 || pontosP2 == 10) {
     pontosP1 = 0;
     pontosP2 = 0;
     velocidadeBolinha = 3;
     xBolinha = 300;
     yBolinha = 200;
  }
}

//monstra a bolinha.
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

//atribui movimento contínuo a bolinha.
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

//verifica se houve colisão com a borda direita e esquerda.
function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  
//verifica se houve colisão com a borda de cima e de baixo.  
  if (yBolinha + raio> height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

//desenha a raquete dos jogadores.
function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, 
      raqueteAltura);
}

//movimenta a raquete do primeiro jogador com as setas do teclado.
function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

//movimenta a raquete do segundo jogador com as teclas "w" e "s".
function movimentaRaquete2(){
 if (keyIsDown(87)){
    yRaquete2 -= 10;
  }
  if (keyIsDown(83)){
    yRaquete2 += 10;
  }
}

//verifica colisão com a raquete 1. 
function verificaColisaoRaquete() {
    colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
   if (colidiu){
     velocidadeXBolinha *= -1;
     velocidadeXBolinha +=  0.5;
     raquetada.play();
    }
}

//verifica colisão com a raquete 2. 
function colisaoRaquete2Biblioteca() {
    colidiu = collideRectCircle(xRaquete2, yRaquete2, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu){
      velocidadeXBolinha *= -1;
      velocidadeXBolinha += -0.5;
      raquetada.play();
    }
}

//mostra o placar.
function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10 ,40 ,20);
  fill(255);
  text(pontosP1, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosP2, 470, 26)
}

//acrescenta os pontos marcados.
function marcaPonto(){
  if (xBolinha > 590){
    pontosP1 += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosP2 += 1;
    ponto.play();
  }
}

//função para resolver bug da bolinha presa.
function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
