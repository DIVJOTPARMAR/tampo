
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bgImg,bg,trampo,trampoline
var aakash,bhavika,gurman
var child1,child2,child3
var jumpSound

function preload()
{
	bgImg=loadImage("garden.jpg")
	trampo=loadImage("Trampoline.png")

	aakash=loadImage("boy.png")
	bhavika=loadImage("girl1.png")
	gurman=loadImage("—Pngtree—jumping cartoon boy_4443930.png")
	jumpSound=loadSound("boing-2-44164.mp3")



	
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	 engine = Engine.create();
	 world = engine.world;
	
     bg=createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
     bg.addImage(bgImg)
     bg.scale=0.3

	  
	 trampoline=createSprite(500,810,20,20)
	 trampoline.addImage(trampo)
	 trampoline.scale=0.26

	 

	 

	 

	



Engine.run(engine);
  
}


function draw() {
  
  background(0);

  
 
  gameplay()
  children()
  
  if(child1.isTouching(trampoline)){
	child1.velocityY=-40

 }

  
  
  
  drawSprites();
 
}
function gameplay(){

	if(keyDown("LEFT_ARROW")){
		trampoline.x=trampoline.x-60
		
	}
	if(keyDown("RIGHT_ARROW")){
		trampoline.x=trampoline.x+60
		

	}

	

}
function children(){
	if(frameCount%60===0){
		child1=createSprite(Math.round(random(80,900)),200,20,20)
	 child1.addImage(gurman)
	 child1.scale=0.08
	 child1.velocityY=+30
	}

	 if(frameCount%130===0){ 
	 child2=createSprite(Math.round(random(20,1000)),200,20,20)
	 child2.addImage(bhavika)
	 child2.scale=0.5
	 child2.velocityY=+30
	}

     if(frameCount%370===0){  
	 child3=createSprite(Math.round(random(80,900)),200,20,20)
	 child3.addImage(aakash)
	 child3.scale=0.05
	 child3.velocityY=+30
	 }

		

	
}


