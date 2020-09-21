var moving,fixed;




function setup() {


  createCanvas(800,400);
fixed=createSprite(200,200,30,30);
moving=createSprite(300,200,40,30);
fixed.shapeColor="red";
moving.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  moving.x=World.mouseX;
  moving.y=World.mouseY;
if(moving.x-fixed.x<fixed.width/2+moving.width/2 &&
  fixed.x-moving.x<fixed.width/2+moving.width/2 &&
  moving.y-fixed.y<fixed.height/2+moving.height/2 &&
  fixed.y-moving.y<fixed.height/2+moving.height/2   )
  {
    moving.shapeColor="blue";
    fixed.shapeColor="blue";
  }
else{
moving.shapeColor="red";
fixed.shapeColor="red";
}



  drawSprites();
}