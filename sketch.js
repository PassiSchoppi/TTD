var rad = 100;
var ellCenX = 250;
var ellCenY = 250;
var rotat = 100;

function setup() {
  frameRate(30);
	createCanvas(500, 500);
}

function getCoordinates(deg){
  deg*=TWO_PI;
  var coordinates = [(rad*Math.cos(deg))+ellCenX, (rad*Math.sin(deg))+ellCenY];
  return coordinates;
}

function draw() {
  background(100);
  //Kreis
  noFill();
  stroke(0);
  ellipse(ellCenX, ellCenY, rad*2, rad*2);
  
  //echter Punkt
  for(i=0; i<rotat; i++){
    noStroke();
    fill(255, 0, 0);
    ellipse(getCoordinates((1/rotat)*i)[0], getCoordinates((1/rotat)*i)[1], 5, 5);
  }
}