var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  pong1 = createSprite(200,200,80,30);
  pong1.shapeColor = "blue";
  pong1.debug = true;

  pong3 = createSprite(300,200,80,30);
  pong3.shapeColor = "blue";
  pong3.debug = true;


  pong4 = createSprite(600,100,80,30);
  pong4.shapeColor = "blue";
  pong4.debug = true;
  pong4.velocityY=4;

  pong2 = createSprite(600,700,80,30);
  pong2.shapeColor = "blue";
  pong2.debug = true;
  pong2.velocityY=-4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(istouching1(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

// collision between the moving rect and pong1
  if(istouching1(movingRect,pong1 )){
    
    pong2.shapeColor="orange";
  }
  else {
    pong2.shapeColor="blue";
  }
  
bouncing(pong2,pong4)
  
  drawSprites();
}

