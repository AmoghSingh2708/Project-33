class Snow{
  constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
           isStatic: true
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.x = x
      this.y = y
      this.image = loadImage("snow5.webp");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0,25,25);
      pop();
    }
};