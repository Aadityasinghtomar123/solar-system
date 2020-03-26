var angle = 0;
var angleSpeed = 1;
var sun;
var mercury;
var venus;
var earth;
var mars;
var jupiter;
var saturn;
var uranus;
var neptune;
function preload() {
  sunimage = loadImage("sun2.jpg");
  mercuryimage = loadImage("mercury.jpg");
  venusimage = loadImage("venus.jpg");
  earthimage = loadImage("earth.jpg");
  marsimage = loadImage("mars.jpg");
  jupiterimage = loadImage("jupiter.jpg");
  saturnimage = loadImage("saturn.jpg");
  uranusimage = loadImage("uranus.jpg");
  neptuneimage = loadImage("neptune.jpg");
}
function setup() {
  createCanvas(1800,900);
  var sun = createSprite(0,0, 50, 50);
  sun.setCollider("circle",-80,-60,140);
  sun.addImage("sun",sunimage);
  sun.scale = 0.5;

  var mercury = createSprite(70,150,30,30);
  mercury.setCollider("circle",0,0,300);
  mercury.addImage("mercury",mercuryimage);
  mercury.scale = 0.1;

  var venus = createSprite(-150,-100,30,30);
  venus.addImage("venus",venusimage);
  venus.scale = 0.3;

  var earth = createSprite(200,0,30,30);
  earth.addImage("earth",earthimage);
  earth.scale = 0.5;

  var mars = createSprite(300,-190,30,30);
  mars.addImage("mars",marsimage);
  mars.scale = 0.1;

  var jupiter = createSprite(350,350,40,40);
  jupiter.addImage("jupiter",jupiterimage);
  jupiter.scale = 0.4;

  var saturn = createSprite(600,420,30,30);
  saturn.addImage("saturn",saturnimage);
  saturn.scale = 0.3;

  var uranus = createSprite(700,500,30,30);
  uranus.addImage("uranus",uranusimage);

  var neptune = createSprite(-500,200,30,30);
  neptune.addImage("neptune",neptuneimage);
  neptune.scale = 0.6;

}

function draw() {
  background(0);
  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(angle);
  angle = angle+angleSpeed;  
  drawSprites();
}