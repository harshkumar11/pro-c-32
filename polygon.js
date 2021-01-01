class polygon extends baseclass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("polygon.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }