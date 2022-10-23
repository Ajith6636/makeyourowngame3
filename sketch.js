
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundImage

function preload()
{
	backgroundImage = loadImage("./assets/universe.jpg");
cometImage = loadImage("./assets/comet1.gif");
ufoImage = loadImage("./assets/ufo.jpg");
spacecraftImage = loadImage("./assets/spacecraftnew.png");
restartimage = loadImage("./assets/restartnew.png");
gameoverimage = loadImage("./assets/gameover.jpg");


}

function setup() {
	
createCanvas(800,700);

spacecraft=createSprite(100,500);
spacecraft.addImage(spacecraftImage);
spacecraft.scale=0.2
comet=createSprite(100,100);
comet.addImage(cometImage);
comet.scale=0.1

restart=createSprite(700,100);
restart.addImage(restartimage);
restart.scale=0.1
gameover=createSprite(600,100);
gameover.addImage(gameoverimage);
gameover.scale=0.1
ufo=createSprite(500,100);
ufo.addImage(ufoImage);
ufo.scale=0.1
engine = Engine.create();
world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);
  
  drawSprites();
 
}



