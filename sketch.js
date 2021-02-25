var ball,ballImage,ballBody;
var ground,groundImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 500);

	ground = createSprite(400,450,800,10);
	ground.shapeColor = ("yellow");

	ball = createSprite(200,445,50);
	ball.shapeColor = ("red");
	ball.scale = 5;
	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ballBody= Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:false})
	World.add(world, packageBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  ball.display();
  ballImage.display();
  ballBody.display();
  drawSprites();
 
}



