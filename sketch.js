var radius = 300;
var KreisX = 1366/2;
var KreisY = 768/2;

var anzalP = 500;
var multiplikator = 1;

function setup() {
  frameRate(1);
  createCanvas(windowWidth, windowHeight);
  multiplikator = 0;
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

  //Kreis
  noFill();
  stroke(random(100, 255), random(100, 255), random(100, 255));
  ellipse(KreisX, KreisY, radius*2, radius*2);
  multiplikator=0;

  var d = new Date();
  var hou = 23-d.getHours();
  var min = 59-d.getMinutes();
  var sec = 59-d.getSeconds();
  multiplikator = (sec)+(min*60)+(hou*3600);

  fill(255);
  textSize(30);
  text("Stunden:   "+str(hou), 20, 30);
  text("Minuten:   "+str(min), 20, 70);
  text("Sekunden:  "+str(sec), 20, 110);
  text("Gesamt:    "+str(multiplikator), 20, 150);
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