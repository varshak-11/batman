class Drops {
constructor(x,y){
var options = {
    friction:1.0,
    restitution:0.1
}
this.r=5
this.body = Bodies.circle(x, y, 5, options);
World.add(this.body,world)
}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    ellipseMode(RADIUS)
    ellipse (0, 0, this.r, this.r);
    pop();
}
updateY(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}


}

