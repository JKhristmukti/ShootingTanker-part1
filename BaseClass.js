class BaseClass {
    constructor(x,y,stroke,fill){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        this.stroke=stroke;
        this.fill=fill;
        this.body.velocityY=8;
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        strokeWeight(3);
        stroke(this.stroke);
        fill(this.fill);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
    
}