function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
}

var size = 1.5
var count = 30;
var index = 0
var z = 30;
var shapes = [0 , 1, 2, 3]

function draw() {
  background(0);
  
  for (var i = 0; i < 60; i++) {
    for (var j = 0; j < 60; j++) {
      var x = i * 50 + 2;
      var y = j * 50 + 2;
      var d = size;
      z += .000000001;

      var r = z;
      fill(255);
      rotate(r / 2);
      rect(mouseX, y, d);

      
    }
  }

  fill(50, 201, 152);
  circle(0, 0, mouseX * 2);
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    if (z < 100) {
      z += 5;
    }
  } else if (keyCode == DOWN_ARROW) {
      z -= 5;
  }

  function mouseClicked() {
    count += 10;
  }

  
}