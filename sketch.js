
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisionHeight=250;

var divisions=[];

var plinkos=[];

var particles=[];

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ground1=new Ground(width/2,690,800,15)

for(var i=0; i<=width; i=i+80){
divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
}

for(var j=40; j<=width-40; j=j+50){
  plinkos.push(new Plinko(j,105,10))
  }


  for(var j=40; j<=width-40; j=j+50){
    plinkos.push(new Plinko(j,145,10))
    }

    for(var j=40; j<=width-40; j=j+50){
      plinkos.push(new Plinko(j,185,10))
      }

      for(var j=40; j<=width-40; j=j+50){
        plinkos.push(new Plinko(j,225,10))
        }
      
    
    
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  createEdgeSprites();
  
  ground1.display();

  


 for(i=0; i <divisions.length;i++){
   divisions[i].display();
 }
  
 for(j=0; j <plinkos.length;j++){
  plinkos[j].display();
}

if(frameCount%50===0){
  particles.push(new Particles(random(250,450),10,10))

}

for(j=0; j <particles.length;j++){
  particles[j].display();
}


  drawSprites();
 
}