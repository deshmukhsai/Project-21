var damage,wall,thickness;
var bullet,speed,weight;

function setup() {
createCanvas(1600,400);
//createSprite(400, 200, 50, 50);
bullet=createSprite(50,200,70,10);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="blue";
wall.debug=true;
bullet.debug= true;
bullet.velocityX= 0.5;
speed=random(100,150);
weight=random(50,75);
thickness=random(22,80);
  }

function draw() {
background(255,255,255);  
deformation=0.5*weight*speed*speed/22509;
bullet.velocityX=speed;
wall.shapeColor="blue";
bullet.shapeColor="white";

if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{
 bullet.velocityX=0;
 var deformation=0.5*weight*speed*speed/22509;
 if(deformation<180){
 bullet.shapeColor=color(255,0,0);
  }
if(deformation<180 && deformation>100){  
 bullet.shapeColor=color(230,230,0);
  }
if(bullet.x>180){
bullet.shapeColor=color(255,0,0);
  }
if(deformation<100){
  bullet.shapeColor=color(0,255,0);
  }

 damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapeColor="green";
  }
  else
  {
  wall.shapeColor="red";}
}
  drawSprites();
}
