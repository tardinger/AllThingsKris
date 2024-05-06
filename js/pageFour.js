var champagne;

function preload(){
  champagne = loadImage('img/champagne.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  imageMode(CENTER);
  background(46, 91, 70);
}

function draw() {
  
  fill(46, 91, 70);
  textSize(40);
  textAlign(CENTER);
  text('The jet was stocked with my \nfavorite champagne, \nKims favorite snacks, and all \nof our favorite blankets and movies!', width/2, height/2)
  
  fill(250);
  noStroke();
  let hue = map(mouseX, 0, width, 0, 360);

  
  // set the diameter of the circle based on the distance
  // between the previous mouse points and current mouse points
  diameter = dist(mouseX, mouseY, pmouseX, pmouseY);
    
  ellipse(mouseX, mouseY, diameter);
}