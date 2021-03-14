const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground,ball;

function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  console.log(ground);
  var ball_options={
    restitution:1.8
  }
  ball=Bodies.rectangle(200,100,20,20,ball_options);
  World.add(world,ball);
}
function draw()
{
  background("blue");
  Engine.update(engine);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,50);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
  
    
}
