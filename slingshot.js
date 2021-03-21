class Slingshot{
    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.sling=Constraint.create(option);
        World.add(world,this.sling)
    }
    display(){
        var A=this.sling.bodyA.position;
        var B=this.sling.bodyB.position;
        strokeWeight(5);
        fill("black");
        line(A.x,A.y,B.x,B.y);
    }
}