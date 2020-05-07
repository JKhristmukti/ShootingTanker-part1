class ShootBall{
    constructor(bodyA, pointB,x,y,radius){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
            isStatic: true,
            restitution:1.0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=20;
        World.add(world,this.body);
    };

    shoot(){
        this.body.velocityX=8;
        this.body.velocityY=-3;
        Matter.Body.setStatic(this.body,false);
    };

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        ellipseMode(RADIUS);
        rotate(angle);
        fill(255);
        ellipse(pos.x,pos.y,this.radius);
        pop();
    };

};
