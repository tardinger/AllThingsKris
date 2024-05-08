var words = ["On", "the", "way", "to", "see", "the", "Mona Lisa", "with", "my", "daughter", "Kimberley", "press", "space", "to", "continue"];
var wordsIndex = 0;
var monaLisa;
var tickets;
var linkIsMade = false;

function preload(){
  monaLisa = loadImage('img/monaLisa.jpg');
  tickets = loadImage('img/tickets.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(241, 100, 79);
}

function draw() {
  image(monaLisa, width/2, height/2, 530, 690)
  textAlign(CENTER);
  textSize(50);
  fill(255);
  text(words[wordsIndex], width/2, height/1.75);
  textSize(30);
  fill(0);
  text("Click me!", width/2, height/4.7);
}

function keyPressed(){
  let link = createA('pagethree.html', '<img src="img/tickets.png"/>');
    link.id('tickets');
    linkIsMade = true;
}


function mousePressed(){
  wordsIndex = wordsIndex + 1;
  if (wordsIndex >= words.length){
    wordsIndex=0;
  }
  
}