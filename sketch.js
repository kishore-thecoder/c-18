var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup = new Group();
  climbersGroup = new Group();
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    drawSprites();
    spawndoor();
}
 function spawndoor(){
   if(frameCount%250===0){

   door = createSprite(200,-50,20,20);
   door.addImage("door",doorImg);
   door.x = Math.round(random(100,400))
   door.velocityY = 1
   doorsGroup.add(door)

   climber = createSprite(200,10,20,20);
   climber.addImage('climber',climberImg);
   climber.x = door.x
   climber.velocityY = 1;
   climbersGroup.add(climber);
 }
 }