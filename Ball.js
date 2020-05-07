class Ball {
  constructor(x,y) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body = Bodies.circle(x,y,30,options);
    this.radius=30;
    World.add(world,this.body);
  };

  display() {
    var pos=this.body.position;
    ellipseMode(RADIUS);
    fill(255);
    ellipse(pos.x,pos.y,this.radius);
  };
};
