class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    };
    this.body = Bodies.circle(x,y,radius);
    this.radius=radius;
    World.add(world,this.body);
  };

  display() {
    var pos=this.body.position;
    ellipseMode(RADIUS);
    fill(255);
    ellipse(pos.x,pos.y,this.width,this.height);
  };
};
