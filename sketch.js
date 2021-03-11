var dog,happyDog,database,foodS,foodStock,dogimg,happydogimg;

function preload()
{
  dog = loadImage("images/dogImg.png"); 

}

function setup() {
	createCanvas(500, 500);
  
  database=firebase.database();
  console.log(database)
 
  
  dog=createSprite(250,250,100,100)
  foodStock=database.ref("Food");
  foodStock.on("value,readStock")
  //Create the Bodies Here.
 
 
  
  

}


function draw() {  
  rectMode(CENTER);
  background(46,139,87);
  foodS=database.ref("Food");
  foodS.on("value",foodS);
  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addimage("images/doghappy.png")
 
 
  }
 
  drawSprites();
  text("Note Press UP_ARROW Key To Feed Drago Milk! ", 250,50);
 
}
 
 
function readStock(data){
 
  foodS=data.val();

 
  //add styles here

}


function writeStock(x){
  if(x<+0){
  
  x=0;
  
  }else{
    x=x-1;
  }
  
  database.ref("/".update)({
  
  })
  
}
 


