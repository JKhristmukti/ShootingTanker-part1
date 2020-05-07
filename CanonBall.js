class CanonBall {
  constructor(x, y) {
    var options = {
      density :   1.5,
      friction : 1.0,
      restitution : 0.8,
      frictionAir:0.06
    }
    this.body = Bodies.circle(x,y,20,options);
    this.radius = 20;
    World.add(world,this.body);
  };

  display(){
    var pos=this.body.position;
    ellipseMode(RADIUS);
    strokeWeight(7);
    stroke("red");
    fill(0);
    ellipse(pos.x,pos.y,this.radius);
  };
};
