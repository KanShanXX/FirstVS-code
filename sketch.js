function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(400, 50, 25, 50);
  movingRect.shapeColor = "blue";

  //fixedRect.debug = true;
  //movingRect.debug = true;
}

function draw() {
  background(0);  
  movingRect.y = mouseY;
  movingRect.x = mouseX;

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2
    ) {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }

  drawSprites();
  

}