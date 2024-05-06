var krisHead;
var mainFont;
var krisBody;
var iPhone;
var linkIsMade = false;

function preload(){
  mainFont = loadFont('img/JacquesFrancois-Regular.ttf');
  krisHead = loadImage('img/KrisHead.png');
  krisBody = loadImage('img/KrisBody.png');
  iPhone = loadImage('img/iPhone.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textFont(mainFont);
  textAlign(CENTER);
  colorMode(HSL);
}


function draw() {
  background(303, 100, 77);
  image(krisBody, 1200, 700, 450, 400);
  textSize(width/30);
  text('I know this sounds crazy but...',width/2,168);
  
  
  image(krisHead, mouseX,mouseY, 300, 300);
  
  if (mouseX > 1200 && mouseY > 550 ){
     textSize(width/25); 
     text('I am exactly where I am meant to be!',width/2,268);
  }
//   if (mouseX > 1200 ){
//     image(tickets, 1600, 400, 150, 170);
//  }
 
if (mouseX > 1200 && !linkIsMade){
  let link = createA('pagetwo.html', '<img src="img/iPhone.png"/>')
  link.id('iPhone');
  linkIsMade = true;
}

}