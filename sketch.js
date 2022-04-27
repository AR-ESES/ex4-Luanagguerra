let espLarg = 20;
let espAltura = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
      translate(-40,-30)
      scale(0.10);
      noStroke();
      
      circle(0, 0, height / espAltura)
rect(119,290, 155, 25, 140);
rect(168, 205, 55, 155, 40);
circle(200, 150, 195);
ellipseMode(RADIUS);
fill(200);
ellipse(162, 110, 30, 30); // Outer white ellipse
ellipseMode(CENTER);
fill(90);
ellipse(162, 110, 30, 30); // Inner gray ellipse 
ellipseMode(RADIUS);
fill(190);
ellipse(235, 110, 30, 30); // Outer white ellipse
ellipseMode(CENTER);
fill(80);
ellipse(235, 110, 30, 30); // Inner gray ellipse
stroke('purple'); // Change the color
strokeWeight(5); // Make the points 10 pixels in size
point(155, 195);
line(225, 175, 170, 175);
arc(200, 95, 100, 100, PI + QUARTER_PI, TWO_PI);
      pop();
    }
  }
}
