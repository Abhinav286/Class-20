var fixedrect,movingrect;


function setup() {
  createCanvas(1200,800);
  
 fixedrect = createSprite(200,200,50,80);
 movingrect = createSprite(400,200,80,30);
 
 movingrect.shapeColor = "orange";
 fixedrect.shapeColor = "orange";


}

function draw() {
  background(0);  
    
  //to make movingrect move with the mouse.
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  
  //to detect the collision from all directions.
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
     fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 && 
     movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
     fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){

    movingrect.shapeColor = "yellow";
    fixedrect.shapeColor = "yellow";


   //to make their color same when they are not collided.
  } else{

    movingrect.shapeColor = "orange";
    fixedrect.shapeColor = "orange";




  }
  
  
  
  drawSprites();
}