class Arc {
  constructor(r, f, h) {
    this.x = 0;
    this.y = 0;
    this.r = r;
    this.f = f;
    this.angle = 0;
    this.length = 180;
    this.angleV = 1;
    this.h = h;
    this.s = 255;
    this.b = 255;
    this.sw;
  }
  update() {
    if (this.collision(0, 40)) {
      this.sw = 5;
    } else {
      this.sw = 1;
    }
    this.x = this.r * cos(this.angle * this.f);
    this.y = this.r * sin(this.angle * this.f);
    this.angle += this.angleV;
  }
  draw() {
    noFill();
    strokeWeight = this.sw;
    stroke(this.h, this.s, this.b)
    arc(
      0,
      0,
      this.r * 2,
      this.r * 2,
      this.angle * this.f - this.length,
      this.angle * this.f
    );
    fill(this.h, this.s, this.b);
    ellipse(this.x, this.y, 5, 5);
   
  }
  collision(loc, buffer) {
    if (
      (this.angle * this.f) % 360 >= loc - buffer &&
      (this.angle * this.f) % 360 <= loc + buffer
    ) {
      return true;
    } else {
      return false;
    }
  }
}
