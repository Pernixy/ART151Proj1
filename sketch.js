function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
console.log("Hello there");
speed = 25;
x = 200;
  function draw() {
    background(120, 185, 160);

    //bottom right square
    strokeWeight(5);
    stroke(0);
    fill(217, 201, 28);
    rect(windowWidth/2, windowHeight/2, windowHeight);

    //top left square
    strokeWeight(5);
    stroke(0);
    fill(252, 152, 3);
    rect(windowWidth/2, windowHeight/2, windowWidth * -1);

    //bottom left square
    strokeWeight(5);
    stroke(0);
    fill(51, 69, 166);
    rect(0, windowHeight/2, windowWidth/2);

    //top left square
    strokeWeight(5);
    stroke(0);
    fill(93, 201, 62);
    rect(windowWidth, windowHeight/2, -windowWidth/2);

    x += speed;
    if (x >= windowWidth - 25) {
      speed = speed * -1;
    }
    if (x <= 0 + 25) {
      speed = speed * -1;
    }
  }