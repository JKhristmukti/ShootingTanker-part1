class ShootBall{
    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
            isStatic: true
        };
        this.body = Bodies.circle(50,450,20,options);
        this.radius=20;
        World.add(world,this.body);
    };

    attach(pointB){
        this.body.position.x=pointB.x;
        this.body.position.y=pointB.y;
    };

    shoot(){
        this.body.velocityX=8;
        this.body.velocityY=-3;
    };

    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill(255);
        ellipse(pos.x,pos.y,this.radius);
    };

};
