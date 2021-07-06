const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var snow;
var character, characterImage;
var snowman,snowmanImage;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  characterImage = loadImage("Character.png");
  snowmanImage = loadImage("Snowman.png");

}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  character = createSprite(540,350,10,10);
  character.addImage(characterImage);
  character.scale = 0.5;

  snowman = createSprite(260,300,10,10);
  snowman.addImage(snowmanImage);
  snowman.scale = 1.0;

  ground = new Ground(600,height,1200,20);
 

  if(frameCount % 90 === 0){
    snowObj = new Snow(random(width/2-10,width/2+10),10,10)
  }

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  

  ground.display();
  
  snowObj.display();




  drawSprites();
}
