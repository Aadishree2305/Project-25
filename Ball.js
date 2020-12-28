class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }
      this.body = Bodies.circle(x, y, 20, options);
      this.r = 20;
      this.image = loadImage("images/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      rotate(angle)
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("red");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  