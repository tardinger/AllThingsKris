var eiffelTower;
var mercedes;
var monaLise;
var mainFont;
var mappedXPosition;
var tickets;
var linkIsMade = false;

function preload(){
  eiffelTower = loadImage('img/eiffelTower1.png');
  mercedes = loadImage('img/mercedes.png');
  monaLisa = loadImage('img/monaLisa.jpg');
  tickets = loadImage('img/tickets.png');
  mainFont = loadFont('img/JacquesFrancois-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  imageMode(CENTER);
  textAlign(CENTER);
  textFont(mainFont);
}

function draw() {
  background(241, 100, 79);
  image(eiffelTower, width/3, height/2.25, 650, 650);
  
  map(mappedXPosition, 0, width, 50, 100);
  image(mercedes, mouseX, 730, 470, 400)
  
  textSize(40);
  fill(241, 100, 79);
  text("Screaming through the streets of Paris in a chauffeur-driven Mercedes ", width/2, 750);
  
  
  if (mouseX > 1450 && !linkIsMade){
    let link = createA('monaLisa.html', '<img src="img/tickets.png"/>');
    link.id('tickets');
    linkIsMade = true;
  }  

}