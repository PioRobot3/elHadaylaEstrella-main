var starImg,bgImg;
var star, starBody;
var ada;
var adaSound;
var  adaImg;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	adaImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	adaSound = loadSound("sound/JoyMusic.mp3")
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);



adaSound.play();


	ada=createSprite(130,520);//crea el sprite del hada, y agrega la animación para el hada
ada.addAnimation("adaImge2",adaImg)
ada.scale=0.24;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada


if (star.y > 470 &&	starBody.position.y>470) {


Matter.Body.setStatic(starBody,true);


}


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyCode === RIGHT_ARROW) {
		ada.x=ada.x+20;
	}

	if (keyCode === LEFT_ARROW) {
		ada.x=ada.x-20;
	}
	if (keyCode === SHIFT && keyCode===RIGHT_ARROW) {
		ada.x=ada.x+30
	}

	if (keyCode === SHIFT && keyCode===LEFT_ARROW) {
		ada.x=ada.x-30
	}
}