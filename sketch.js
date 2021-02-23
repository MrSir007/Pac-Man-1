var pacman;
var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, w13, w14, w16, w17, w18, w19, w20;


function setup() {
  createCanvas(600,800);

  w1 = createSprite(300,90,560,10);
  w2 = createSprite(300,710,560,10);
  w3 = createSprite(25,200,10,220);
  w4 = createSprite(25,600,10,220);
  w5 = createSprite(575,200,10,220);
  w6 = createSprite(575,600,10,220);
  w7 = createSprite(135,400,10,200);
  w8 = createSprite(465,400,10,200);
  w9 = createSprite(80,305,100,10);
  w10 = createSprite(80,495,100,10);
  w11 = createSprite(520,305,100,10);
  w12 = createSprite(520,495,100,10);
  w13 = createSprite(300,365,100,10);
  w14 = createSprite(300,435,100,10);
  w13 = createSprite(255,400,10,80);
  w14 = createSprite(345,400,10,80);
  w15 = createSprite(300,135,10,80);
  w16 = createSprite(300,270,10,80);
  w17 = createSprite(300,230,100,10)
}

function draw() {
  background("black");

  drawSprites();
}