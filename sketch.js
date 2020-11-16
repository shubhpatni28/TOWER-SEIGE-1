const Engine = Matter.Engine;
const World = Matter.World;
 //const world = Matter.world;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1000, 600);
  


	engine = Engine.create();
	world = engine.world;
  ball=new Ball(100,100,30);

  bg=new Ground(800,450,300,10);

  //ROW1
  block1=new bl(710,400,30,40);
  block2=new bl(740,400,30,40);
  block3=new bl (770,400,30,40);
  block4=new bl (800,400,30,40);
  block5=new bl(830,400,30,40);
  block6=new bl(860,400,30,40);

  //ROW2
  block7=new pink(735,200,30,40);
  block8=new pink(765,200,30,40);
  block9=new pink(795,200,30,40);
  block10=new pink(825,200,30,40);
  block11=new pink(855,200,30,40);

  //ROW3
  block12=new blue(760,50,30,40);
  block13=new blue(790,50,30,40);
  block14=new blue(820,50,30,40);


  block16=new bl(890,400,30,40)

  //ROW TOP
   block15=new green(790,5,30,40);

   sling1=new slingshot(ball.body,{x:200,y:250})



	Engine.run(engine);
  
}


function draw() {
  background("gray");
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);
  
  ball.display();
  bg.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block16.display();
  block15.display();
  sling1.display();

  drawSprites ();
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling1.fly();
}
