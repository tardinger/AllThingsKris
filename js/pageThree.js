var newString = "From Paris we were flown in a shiny, sexy private jet which looked just like a beautiful black Chanel handbag";
let angleRotate = 0.0;

var cloudOne;
var cloudTwo;
var cloudThree;
var privateJet;
var glasses;
var linkIsMade = false;
var rubikBubbles;
var mappedBackgroundColor;



function preload(){
  cloudOne = loadImage('img/cloudOne.png');
  cloudTwo = loadImage('img/cloudTwo.png');
  cloudThree = loadImage('img/cloudThree.png');
  privateJet = loadImage('img/plane.png');
  glasses = loadImage('img/glasses.png');
  rubikBubbles = loadFont('img/RubikBubbles-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  imageMode(CENTER);
}

function draw() {
  mappedBackgroundColor = map(mouseY, 222, height, 225, 0);
  background(mappedBackgroundColor, 100, 30);
  image(cloudOne, 200, 230, 300, 150);
  image(cloudTwo, 1230, 240, 300, 150);
  image(cloudThree, 730, 740, 300, 150);
  
  textSize(30);
  noStroke();
  fill(360);
  textFont('rubikBubbles');
  textAlign(LEFT);
  
  
  let revealText = map(mouseX, 0, 1500, 0, newString.length);
  
  push();
  let angle1 = radians(343);
  rotate(angle1);
  translate(10, 300);
  // Draw the letter to the screen
  text(newString.substring(0, revealText), width/400, height/2);
  image(privateJet, mouseX,mouseY, 500, 320);   
  line(0, 0, 150, 0);

  if (mouseX > 1200 && !linkIsMade){
    let link = createA('pagefour.html', '<img src="img/glasses.png"/>')
    link.id('glasses');
    linkIsMade = true;
  }  


}