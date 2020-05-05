class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     };

      this.body = Bodies.rectangle(x,y,width,height);
      this.width=width;
      this.width=width;
      World.addline(world,this.body);
    };

    display(){
      var pos=this.body.position;
      rectMode(CENTER);
      ellipseMode(RADIUS);
      strokeWeight(5);
      stroke("black");
      fill("blue");
      rect(pos.x,pos.y,this.width,this.height);
      rect(pos.x,pos.y+this.height/2,this.width,this.height);
      rect(pos.x+this.height/2,pos.y,this.width,this.height);
      ellipse(pos.x,pos.y-this.height/2,this.width,this.height);
    };
}
