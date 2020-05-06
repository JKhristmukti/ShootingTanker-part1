const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var r1,r2,r3,world,engine;

function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.World;

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  for (let index = 0; index < 800; index+random(1,20)) {
     r1 = new Raindrop1(index,0,random(5,10),random(10,25));   
  }

  r1.display();
  r2.display();
  r3.display(); 
  drawSprites();
}