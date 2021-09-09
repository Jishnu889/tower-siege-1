class Slingshot
{
    constructor(bodyA,pointB)
    {
        var options=
        {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
        }
        this.sling=Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.sling)
    }
    fly()
    {
        this.sling.bodyA=null
    }
    display()
    {
        if(this.sling.bodyB)
        {
            var pointA=null
            var pointB=this.sling.bodyB.position
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
    
}
//bodyB=hexagon
//pointB=sling attached to hexagon