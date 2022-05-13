const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
let engine, world;

var ground;
var bg_img;
var tower, tower_img;



function preload() {
  bg_img = loadImage("./assets/background.gif")
  tower_img = loadImage("./assets/tower.png")
}

function setup() {


  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  //criando o corpo do solo
  ground = Bodies.rectangle(0,height-1,width*2,1,{isStatic:true});
  World.add(world,ground);

  //criando o corpo da torre
  tower = Bodies.rectangle(160,350,160,310,{isStatic:true})

}

function draw() {
  background(189);
  //criando o background de imagem
  image(bg_img,0,0,width,height)

  Engine.update(engine);



  //desenhando o solo na tela
  rect(ground.position.x,ground.position.y,width*2,1)

  //exibindo o corpo da torre na tela
  push()
  imageMode(CENTER)
  image(tower_img,tower.position.x,tower.position.y,160,350)
  pop()


  text(mouseX+" | "+mouseY,mouseX,mouseY)


}
