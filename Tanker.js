class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }

      this.body = Bodies.rectangle(x,y,width,height);
      this.width=width;
      this.width=width;
      World.add(world,this.body);
    };

    display(){
      var pos=this.body.position;
      rectMode(CENTER);
      ellipseMode(RADIUS);
      strokeWeight(5);
      stroke("black");
      fill("blue");
      rect(pos.x,pos.y,this.width,this.height);
    };
};
