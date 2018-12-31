var radius = 300;
var KreisX = 1366/2;
var KreisY = 768/2;

var anzalP = 100;
var multiplikator = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
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
  multiplikator=0;

  var d = new Date();
  var hou = 23-d.getHours();
  var min = 59-d.getMinutes();
  var sec = 59-d.getSeconds();
  multiplikator = (sec)+(min*60)+(hou*3600);
  fill(255);
  textSize(20);
  text("Stunden:   "+str(hou), 20, 20);
  text("Minuten:   "+str(min), 20, 60);
  text("Sekunden:  "+str(sec), 20, 100);
  text("Gesamt:    "+str(multiplikator), 20, 140);
  //Berechnung
  for(punktID=0; punktID<anzalP; punktID++){
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