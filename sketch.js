var monster,food;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

}

function draw() {
  background(0);
 var monster = createSprite (200,200,20,20);
 var food = createSprite(1500,2900,100,10);

 drawSprites();
}

