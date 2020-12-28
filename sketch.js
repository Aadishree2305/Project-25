
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(280,280);
	ground = new Ground(600,480,1200,20);
	trash1 = new Trash(580,430,20,80);
	trash2 = new Trash(480,460,200,20);
	trash3 = new Trash(380,430,20,80);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ground.display();
  trash1.display();
  trash2.display();
  trash3.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
       Matter.Body.applyForce(ball1.body,ball1.body.position,{x:25,y:-25})
	}
}
