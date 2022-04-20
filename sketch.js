var star 

function setup() {
  createCanvas(400,400);
star= createSprite(200,200,20,20)
} 

function draw() 
{
  background("green");
  if(keyDown("left")){
    star.x= star.x -2
    
  }
 

 if(keyDown("right")){
    star.x= star.x +2
 }
 if(keyDown("up")){
  star.y= star.y -2
}
if(keyDown("down")){
  star.y= star.y +2
}
 
    drawSprites()
}




