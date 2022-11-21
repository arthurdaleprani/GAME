let Draq = 100;
let Xbola = 300;
let Ybola = 200;
let Dbola = 25;
let velXbola = 6;
let velYbola = 6;
let raio = Dbola / 2;
let Xraq = 5;
let Yraq = 150;
let Compraq = 10;
let Altraq = 90;
let Xraq2 = 580;
let Yraq2 = 150;
let meusPontos = 0;
let pontosOp = 0;
let colidiu = false;
let chanceErro = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  bolinha();
  velbola();
  raquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete(Xraq, Yraq)
    verificaColisaoRaquete(Xraq2, Yraq2)
  raquete2(Xraq2, Yraq2);
  clisaoraq2();
  movOp();
  clisaoraq();
  Ponto();
 Placar();
  verificaColisaoBorda();
 opErro()

}

function bolinha() {
  circle(Xbola, Ybola, Dbola);
}

function raquete() {
  rect(Xraq, Yraq, Compraq, Altraq);
}

function velbola() {
  Xbola += velXbola;
  Ybola += velYbola;
}
function verificaColisaoBorda() {
  if (Xbola + raio > width || Xbola - raio < 0) {
    velXbola *= -1;
  }
  if (Ybola + raio > height || Ybola - raio < 0) {
    velYbola *= -1;
  }
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    Yraq -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    Yraq += 10;
  }
}

function verificaColisaoRaquete(x, y){
  if (Xbola - raio < x + Compraq && 
      Ybola - raio < y + Altraq && Ybola + raio > y){
    
    velXbola *= -1;
  }
  
}

function colisaoRaq() {
  if (Yraq + Draq > height || Yraq - Draq < 0) {
  }
}

function colisaoBordaMinhaRaquete(x, y) {
  if (Yraq + Altraq > 400) {
    Yraq -= 10;
  }
  if (Yraq < 0) {
    Yraq += 10;
  }
}

function raquete2() {
  rect(Xraq2, Yraq2, Compraq, Altraq);
}
function clisaoraq2() {
  if (Yraq2 + Altraq > 400) {
    Yraq2 -= 10;
  }
  if (Yraq2 < 0) {
    Yraq2 += 10;
  }
}

function clisaoraq() {
  if (Yraq + Altraq > 400) {
    Yraq -= 10;
  }
  if (Yraq < 0) {
    Yraq += 10;
  }
}

function movOp() {
  velocidadeYraq2 = Ybola - Yraq2 - Compraq / 2 - 30;
  Yraq2 += velocidadeYraq2 + chanceErro
  opErro()
}

function opErro(){
if(meusPontos >= pontosOp){
  chanceErro += 1
  if(chanceErro >=39){
    chanceErro = 40
    
  }
} else{
  chanceErro -=1
  if(chanceErro <= 35){
    chanceErro = 35
  }
}
  
  
}



function Placar() {
 stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosOp, 470, 26);}

function Ponto() {
  if (Xbola > 585) {
    meusPontos += 1;
  }
  if (Xbola < 15) {
    pontosOp += 1;
  }
}

function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y,Compraq, Altraq, Xbola, Ybola, raio);
  if (colidiu){
   velXbola *= -1;
  }
}
