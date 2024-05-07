var champagne;
var linkIsMade = false;

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

  diameter = dist(mouseX, mouseY, pmouseX, pmouseY);
    
  ellipse(mouseX, mouseY, diameter);

  if (mouseX > 1200 && !linkIsMade){
    let link = createA('pagefive.html', 'click here')
    link.id('lastlink');
    linkIsMade = true;
  }  

}