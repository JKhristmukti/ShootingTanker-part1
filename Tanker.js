class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }

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
      stroke("blue");
      fill(255);
      rect(pos.x,pos.y,this.width,this.height); el
      rect(pos.x+this.width/2,pos.y+this.height/2,this.width,this.height);
      ellipse(pos.x-this.width/2,pos.y-this.height/2,this.width,this.height);
    };
}
