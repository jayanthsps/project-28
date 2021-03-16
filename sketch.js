
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1150,100,30);
  mango3=new mango(1200,150,30);
  mango4 = new mango(1000, 130, 30);
    stone=new Stone(170,340,20)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	slingshot = new Slingshot(stone.body,{x:235,y:425});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
   image(boy ,200,340,200,300);
  
   if(keyCode=== "SPACE"){
	   stone.x=170;
	   stone.y=340;
   }

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  slingshot.display();
  groundObject.display();

 detectcollision(stone,mango1)
 detectcollision(stone,mango2)
 detectcollision(stone,mango3)
 detectcollision(stone,mango4)
}


function mouseDragged(){

   Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}


function mouseReleased(){
     
  slingshot.fly();

}


function detectcollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
        Matter.Body.setStatic(lmango.body,false)
  }
}