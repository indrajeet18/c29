const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var frutcon;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(6,{x:245,y:30})

  var frutoptions={
     density:0.001
  }

  frut=Bodies.circle(300,300,15,frutoptions)

  Matter.Composite.add(rope.body,frut)

  frutcon= new Link (rope,frut)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  ellipse(frut.position.x,frut.position.y,15,15)
  
  Engine.update(engine);
  

 
   
}
