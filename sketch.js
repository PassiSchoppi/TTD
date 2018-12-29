var radius = 200;
var KreisX = 250;
var KreisY = 250;

var anzalP = 100;
var multiplikator = 1;

function setup() {
  frameRate(30);
	createCanvas(500, 500);
}

function getkoordinaten(kreisAnteil){
  kreisAnteil*=TWO_PI;
  var koordinaten = [(radius*Math.cos(kreisAnteil))+KreisX, (radius*Math.sin(kreisAnteil))+KreisY];
  return koordinaten;
}

function draw() {
  background(100);
  //Kreis
  noFill();
  stroke(255);
  ellipse(KreisX, KreisY, radius*2, radius*2);
  
  //Berechnung
  for(punktID=0; punktID<anzalP; punktID++){
    multiplikator+=0.0002;
    //erster Punkt
    var ersterP = getkoordinaten((1/anzalP)*punktID);
    noStroke();
    fill(255);
    ellipse(ersterP[0], ersterP[1], 3, 3);
    //zweiter Punkt
    var zweiterP = getkoordinaten((1/anzalP)*punktID*multiplikator);
    //Linine
    stroke(255);
    line(ersterP[0], ersterP[1], zweiterP[0], zweiterP[1]);
  }
}