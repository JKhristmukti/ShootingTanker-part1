const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var tank,ground,ball1,ball2,canonball,shootball,img,world;

function preload() {
   img=loadImage("canonBall.png");
}

function setup() {
   createCanvas(800,500);

   Engine.create();
   world=Engine.World;

   tank = new Tanker(50,450,50,20);
   ground = new Ground(400,490,500,10);
   ball1 = new Ball(600,150,10);
   ball2 = new Ball(400,300,30);
   canonball = new CanonBall(tank.x,tank.y);
   canonball.addImage("canonBall.png",img);
   shootball = new ShootBall(tank,canonball);
   attach(canonball);

   Engine.run(Engine);
}

function draw() {
   Engine.update(Engine);

   tank.display();
   ground.display();
   ball1.display();
   ball2.display();
   canonball.display();
   shootball.display();
}


function keyReleased() {
   if(keyCode == LEFT_ARROW){
      shoot();
   }
}