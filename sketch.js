
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score = 0;

function preload() {
    polygon_img=loadImage("polygon.png");
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(760, 215, 150, 20);
    platform2 = new Ground(570, 355, 150, 20);

    block1 = new Box(700,195, 30,40)
    block2 = new Box(730,195, 30,40)
    block3 = new Box(760,195, 30,40)
    block4 = new Box(790,195, 30,40)
    block5 = new Box(820,195, 30,40)
    block6 = new Box(730,175, 30,40)
    block7 = new Box(760,175, 30,40)
    block8 = new Box(790,175, 30,40)
    block9 = new Box(760,135, 30,40)

    
    block10 = new Box(510,335, 30,40)
    block11 = new Box(540,335, 30,40)
    block12= new Box(570,335, 30,40)
    block13= new Box(600,335, 30,40)
    block14= new Box(630,335, 30,40)
    block15= new Box(540,305, 30,40)
    block16= new Box(570,305, 30,40)
    block17= new Box(600,305, 30,40)
    block18= new Box(570,265, 30,40)
    
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    
    slingshot1 = new Slingshot(this.polygon,{x: 150, y:200} )


}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)

    Engine.update(engine);
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    ground.display();
    platform1.display();
    platform2.display();

    slingshot1.display();  
    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon, {x:200, y:200})
       slingshot1.attach(polygon);

    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();

    var datetime = responseJSON.currentDateTime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = ("bg1.jpg");
    }
    else{
        bg = ("bg2.jpg");
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
