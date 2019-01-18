var radius = 300;
var KreisX = 1366/2;
var KreisY = 650/2;

var anzalP = 500;
var multiplikator = 0;

function setup() {
  frameRate(1)
  createCanvas(windowWidth, windowHeight);
}

function getkoordinaten(kreisAnteil){
  kreisAnteil*=TWO_PI;
  var koordinaten = [(radius*Math.cos(kreisAnteil))+KreisX, (radius*Math.sin(kreisAnteil))+KreisY];
  return koordinaten;
}

function draw() {
  anzalP = 500;
  background(100);
  strokeWeight(1);

  multiplikator++;

  //Kreis
  noFill();
  stroke(255);
  ellipse(KreisX, KreisY, radius*2, radius*2);

  //Text
  textSize(30);
  fill(255);
  text(multiplikator, 100, 100, 100, 100);

  //Berechnung
  for(punktID=0; punktID<anzalP; punktID++){
    //erster Punkt
    var ersterP = getkoordinaten((1/anzalP)*punktID);
    ellipse(ersterP[0], ersterP[1], 3, 3);
    //zweiter Punkt
    var zweiterP = getkoordinaten((1/anzalP)*punktID*multiplikator);
    //Linine
    line(ersterP[0], ersterP[1], zweiterP[0], zweiterP[1]);
  }
}

function mousePressed() {
  multiplikator=0;
}