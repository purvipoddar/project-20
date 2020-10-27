var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);
  // creating car sprite
  car = createSprite(10, 200, 50, 50);
  car.shapeColor = "white"
  car.velocityX = speed
// creating wall sprite
  wall = createSprite(750,200,20,400);
  wall.shapeColor = "white";
  
}

function draw() {
  background(0);

if(wall.x - car.x < wall.width/2 + car.width/2){
car.velocityX = 0;
 var deformation = 0.5*weight*speed*speed/22500;
 if(deformation>180){
   car.sapeColor = "red"
 }
 if(deformation<180 && deformation>100){
   car.shapeColor = "yellow"
 }
 if(deformation<100){
   car.shapeColor = "green"
 }
}
  drawSprites();
}