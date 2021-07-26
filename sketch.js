var snowfImg;
var snowImg;

function preload(){
  snowfImg=loadImage("snow5.webp");
  snowImg=loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1200,800);
  
}

function draw() {
  background(snowImg);  
  snowfall();
  drawSprites();
}

function snowfall(){
  if(frameCount%10===0){
    snow=createSprite(random(0,1200),0,50,50);
    snow.velocityX=-2;
    snow.velocityY=4;
    snow.scale=0.1;
    snow.addImage(snowfImg);
  }
}