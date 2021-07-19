 var nobita,nobitaImg,bg,bgImg
var g1group,g2group,g3group,g4group
var PLAY=1
var gameState = PLAY,END
var gadgets=0
var lives = 3
var end,restart
var score=0
function preload(){
nobitaImg = loadImage("nobita-removebg-preview.png")
g1Img = loadImage("gadget1-removebg-preview.png")
g2Img = loadImage("gadget2-removebg-preview.png")
g3Img = loadImage("gadget3-removebg-preview.png")
g4Img = loadImage("gadget4-removebg-preview.png")
d1img = loadImage("danger1-removebg-preview.png")
d2img = loadImage("danger2-removebg-preview.png")
endImg = loadImage("end-removebg-preview.png")
restartImg = loadImage("restart-removebg-preview.png")
bgImg = loadImage("road.png")
}

function setup() {
    createCanvas(800,400)
 bg = createSprite(400,200,20,20)
 bg.addImage(bgImg)
 bg.scale=0.9
 
 nobita = createSprite(50,200,20,20)
 nobita.addImage(nobitaImg)
 nobita.scale=0.4
 end = createSprite(400,180,20,20)
  end.addImage(endImg)
  restart = createSprite(400,300,20,20)
  restart.addImage(restartImg)
g1group = new Group();
g2group = new Group();
g3group = new Group();
g4group = new Group();
d1group = new Group();
d2group = new Group();






}

function draw() {
 background(212)


 
  if(gameState===PLAY){
    bg.velocityX=-6
    if(bg.x < 0 ){
      bg.x = width/2;
    } 
   
   
    nobita.y = World.mouseY;
   
    edges= createEdgeSprites();
    nobita .collide(edges);
   
   //code to reset the background
  
   var select_oppPlayer = Math.round(random(1,7));
  
   if (World.frameCount % 170 == 0) {
     if (select_oppPlayer == 1) {
       gadget4();
     } else if (select_oppPlayer == 2) {
      danger2();
     }   else if (select_oppPlayer == 3) {
        gadget2();
    }   else if (select_oppPlayer == 4) {
        danger1();
    }   else if (select_oppPlayer == 5) {
      gadget1();
     } else {
     gadget3();
     }
   }
  if(nobita.isTouching(d1group)){
  lives=lives-1
  d1group.destroyEach();
  }
  if(nobita.isTouching(d2group)){
    lives=lives-1
    d2group.destroyEach();
    }
 if(nobita.isTouching(g1group)){
   gadgets=gadgets+1
   g1group.destroyEach();
 }
 if(nobita.isTouching(g2group)){
  gadgets=gadgets+1
  g2group.destroyEach();
}
if(nobita.isTouching(g3group)){
  gadgets=gadgets+1
  g3group.destroyEach();
}
if(nobita.isTouching(g4group)){
  gadgets=gadgets+1
  g4group.destroyEach();
}
 end.visible=false
 restart.visible=false


}
   
 if (lives==0){
   gameState=END
 }

 if (gameState === END) {
 
 
 
  end.visible=true
  
  restart.visible=true
  bg.velocityX = 0;
 score=0
  nobita.visible=false
  g1group.setVelocityXEach(0);
 g1group.destroyEach();
  
 g2group.setVelocityXEach(0);
 g2group.destroyEach();

 g3group.setVelocityXEach(0);
 g3group.destroyEach();

 g4group.setVelocityXEach(0);
 g4group.destroyEach();

 d1group.setVelocityXEach(0);
 d1group.destroyEach();

 d2group.setVelocityXEach(0);
 d2group.destroyEach();

  //write condition for calling reset( )
 if(mousePressedOver(restart)){
 reset();
 }
 }






 score = score + Math.round(getFrameRate()/60);





 drawSprites();
 textSize(20);
 fill(255);
 text("LIVES: "+ lives,440,40);
 textSize(20);
 fill(255);
 text("GADGETS: "+ gadgets,640,40);
 textSize(20);
 fill(255);
 text("SCORE: "+ score, 240,40);
}























function danger1(){
    var  d1=createSprite(700,Math.round(random(50, 250)));
      d1.scale =0.4
     d1.velocityX=-4
     d1.addImage(d1img);
      d1.setLifetime=300
      d1group.add(d1);
  }

  function danger2(){
    var  d2=createSprite(700,Math.round(random(50, 250)));
      d2.scale =0.4
     d2.velocityX=-4
     d2.addImage(d2img);
      d2.setLifetime=300
      d2group.add(d2);
  }






function gadget2(){
  var  g2=createSprite(700,Math.round(random(50, 250)));
    g2.scale =0.4
   g2.velocityX=-3
   g2.addImage(g2Img);
    g2.setLifetime=300
    g2group.add(g2);
}

function gadget3(){
  var  g3 =createSprite(700,Math.round(random(50, 250))); 
  g3.velocityX=-4
   g3.addImage(g3Img);
   g3.scale =0.4
    g3.setLifetime=300
    g3group.add(g3);
}

function gadget4(){
  var  g4 =createSprite(700,Math.round(random(50, 250)));
  g4.velocityX=-4
   g4.addImage(g4Img);
   g4.scale =0.4
    g4.setLifetime=300
    g4group.add(g4);
}

function gadget1(){
  var  g1 =createSprite(700,Math.round(random(50, 250)));
  g1.velocityX=-4
   g1.addImage(g1Img);
   g1.scale =0.3
    g1.setLifetime=300
    g1group.add(g1);
}



function reset(){
  gameState=PLAY
 nobita.visible=true
 
 
  lives=3
  gadgets=0
  score=0
}




