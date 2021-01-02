
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,10)
	paperObject = new PaperObject(100,100,20)
	basketLeft=new Basket(600,650,20,100)
	basketBottom=new Basket(630,670,100,20)
	basketRight=new Basket(700,650,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  paperObject.display()
  basketLeft.display()
  basketBottom.display()
  basketRight.display()
  drawSprites();
 
}


function keypressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}


