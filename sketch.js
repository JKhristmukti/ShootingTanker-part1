const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var tank,ground,ball1,ball2,canonball,canonballsprite,shootball,img,world;

function preload() {
   img=loadImage("canonBall.png");
};

function setup() {
   createCanvas(800,500);

   canonballsprite=createSprite(50,450,20,20);
   canonballsprite.addImage(img);

   Engine.create();
   world=Engine.World;

   tank = new Tanker(50,450,50,20);
   ground = new Ground(400,490,500,10);
   ball1 = new Ball(600,150,10);
   ball2 = new Ball(400,300,30);
   canonball = new CanonBall(tank.x,tank.y);
   shootball = new ShootBall(tank,canonball);

   Engine.run(Engine);
};

function draw() {
   Engine.update(Engine);

   shootball.attach(canonballsprite);
   
   canonballsprite.x=canonball.position.x;
   canonballsprite.y=canonball.position.y;

   keyReleased();

   tank.display();
   ground.display();
   ball1.display();
   ball2.display();
   canonball.display();
   shootball.display();
   drawSprites();
};

function keyReleased() {
   if(keyCode == RIGHT_ARROW){
      shootball.shoot();
      Matter.Body.setStatic(shootball,false);
   };
};