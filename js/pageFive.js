var fabFont;
var mappedBackgroundColor;
var mappedTextColor;

function preload(){
  fabFont = loadFont('img/RobotoCondensed-VariableFont_wght.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  textFont(fabFont);
  textAlign(CENTER);
}

function draw() {
  mappedBackgroundColor = map(mouseY, 0, height, 63, 0);
  mappedTextColor = map(mouseY, 0, height, 310, 0);

  background(mappedBackgroundColor, 100, 30);
  textSize(160);
  fill(mappedTextColor, 100, 30)
  text('FABULOUS!', width/2, height/2);

    
}