const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world



function setup(){
engine = Engine.create();
world = engine.world 

createCanvas(900,400)

ground = new Ground(450,390,900,20);

stand1 = new Stand(390,300,250,10);
stand2 = new Stand(700,200,200,10);

block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);
block16 = new Block(390,155,30,40);

//second block set
block17 = new Block(640,175,30,40);
block18 = new Block(670,175,30,40);
block19 = new Block(700,175,30,40);
block20 = new Block(730,175,30,40);
block21 = new Block(760,175,30,40);
block22 = new Block(670,135,30,40);
block23 = new Block(700,135,30,40);
block24 = new Block(730,135,30,40);
block25 = new Block(700,95,30,40);

ball=Bodies.circle(50,200,20);
World.add(world,ball);
slingshot = new Slingshot(this.ball,{x:100,y:200});

}

function preload(){
    polygon_image = loadImage("polygon.png");
}


function draw(){
   background(0);
   textSize(20);
   fill("yellow");
   text("Drag the hexagon stone and release it, to launch it towards the boxes",100,30)
   Engine.update(engine);

   ground.display();

   fill("skyblue");
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   fill("pink");
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   fill("red");
   block13.display();
   block14.display();
   block15.display();
   fill("gray");
   block16.display();
   fill("skyblue");
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   fill("pink");
   block22.display();
   block23.display();
   block24.display();
   fill("gold");
   block25.display();

   stand1.display();
   stand2.display();

   slingshot.display();


   imageMode(CENTER);
   image(polygon_image,ball.position.x,ball.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.ball);
    }
}