const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var tank,ground,ball1,ball2,canonball,shootball,world,engine;

function setup() {
   createCanvas(800,500);

   engine=Engine.create();
   world=engine.world;

   tank = new Tanker(50,450,70,50);
   ground = new Ground(400,490,800,20);
   ball1 = new Ball(600,150);
   ball2 = new Ball(400,300);
   canonball = new CanonBall(50,450);
   shootball = new ShootBall(tank,canonball,50,450,20);

   Engine.run(engine);
};

function draw() {
   background(0,0,0);
   Engine.update(engine);

   keyReleased();

   tank.display();
   ground.display();
   ball1.display();
   ball2.display();
   canonball.display();
   shootball.display();
};

function keyReleased() {
   if(keyCode == RIGHT_ARROW){
      shootball.shoot();
   };
};