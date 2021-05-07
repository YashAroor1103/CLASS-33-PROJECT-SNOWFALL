const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

  var maxDrops = 100;
  var drops = [];
  var backGroundImage;

  function preload(){
    backGroundImage = loadImage("snow3.jpg");
  }

function setup() {
  createCanvas(300,500);
  engine = Engine.create();
  world = engine.world;

  if(frameCount%100===0){
    for(var i=0; i<maxDrops; i++){
      drops.push(new Drop(random(0,400),random(0,400),3,10));
    }
  }

  
}

function draw() {
  background(backGroundImage);
  Engine.update(engine);

  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
  
  drawSprites();
}