var radius = 300;
var circleX = 1366/2;
var circleY = 650/2;

var numberOfPoints = 500;
var times = 0;

function setup() {
  frameRate(30)
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  numberOfPoints = 500;
  background(100);
  strokeWeight(1);
  times+=0.01;

  // circle
  noFill();
  stroke(255);
  ellipse(circleX, circleY, radius*2, radius*2);

  for(punktID=0; punktID<numberOfPoints; punktID++){
    // first point
    var firstP = getPointCoordinates((1/numberOfPoints)*punktID);
    ellipse(firstP[0], firstP[1], 3, 3);
    // second point
    var secondP = getPointCoordinates((1/numberOfPoints)*punktID*times);
    // line
    line(firstP[0], firstP[1], secondP[0], secondP[1]);
  }
}

function getPointCoordinates(proportionOfCircle){
  proportionOfCircle*=TWO_PI;
  var coordinates = [(radius*Math.cos(proportionOfCircle))+circleX, (radius*Math.sin(proportionOfCircle))+circleY];
  return coordinates;
}

function mousePressed() {
  times=0;
}
