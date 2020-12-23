
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1=new Box(400,630,200,10)
	b2=new Box(300,610,10,100)
	b3=new Box(500,610,10,100)
	Engine.run(engine);
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  b1.display();
  b2.display();
  b3.display();
  drawSprites();
 
}



