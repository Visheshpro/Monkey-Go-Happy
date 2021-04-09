
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400, 400)
  
monkey = createSprite(80, 320, 10, 10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1
 
  
  ground = createSprite(400, 350, 900, 10)
  ground.x = ground.width/2
  ground.velocityX = -5
  
  foodGroup = createGroup()
  
}


function draw() {
  
  background("white")
  
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime, 300, 30)
  
  monkey.collide(ground)
  
  if (ground.x < 0){
    
    ground.x = ground.width/2
    
  }
  
  
  if (keyDown("space") && monkey.y === 314.3){
    
    monkey.velocityY = -10
  }
   monkey.velocityY = monkey.velocityY + 0.3
  
 spawnBanana()
  spawnObstacles()

  drawSprites()
}

function spawnBanana(){
  
  if (World.frameCount % 80 === 0){
    
    banana = createSprite(400, Math.round(random(120,200), 10, 10))
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = ground.velocityX
    banana.lifetime = 100
    foodGroup.add(banana)
  }
}

function spawnObstacles(){
  if (World.frameCount % 300 === 0){
    
    obstacle = createSprite(400, 326, 10, 10)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacle.velocityX = ground.velocityX
    obstacle.lifetime = 100
    
  }
}




