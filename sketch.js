
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,plane,stone,rubber,iron,sand1;
var sand2,sand3,sand4,sand5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 hammer = new Hammer(100,100);
	 plane = new Plane(400,height,800,20);
   stone = new Stone(400,670,40,40);
   iron = new Iron(300,660,50,60);
  rubber = new Rubber(300,640,60);
  sand1 = new Sand(350,670,10);
  sand2 = new Sand(340,670,10);
  sand3 = new Sand(330,670,10);
  sand4 = new Sand(320,670,10);
  sand5 = new Sand(310,670,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  plane.display();
  stone.display();
  iron.display();
 rubber.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
  drawSprites();
 
}



