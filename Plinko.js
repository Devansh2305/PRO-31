class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
       fill("red")
        push();
        ellipse(this.body.position.x, this.body.position.y,20,20);
        pop();
        noFill();
      }
}