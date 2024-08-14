
let arcs;
let num
let r_mult
let f_mult
let r0


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  colorMode(HSB)
  
  arcs = []
  num = 80
  r_mult = 0.05
  r0 = 30
  f_mult = 0.08

  for(let i = 0; i< num; i++){
    let r = r0 + (i + 1) * num * r_mult
    let f = (i + 1) * f_mult
    let h = 200 + 100/num * i
    arcs.push(a = new Arc(r, f, h))
  }




  
}

function draw() {
  background(240, 70, 50);

  translate(width / 2, height / 2);
  for (let i = 0; i < arcs.length; i++) {
    arcs[i].draw()
    arcs[i].update()
  }


}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
