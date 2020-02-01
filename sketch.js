var database
var drawing=[];
var currentPath = [];
var path


function setup() {
  canvas=createCanvas(400,400);
  canvas.mousePressed(startPath);
 // canvas.mouseReleased(endPath);

  database = firebase.database(); 
}
function startPath(){
  currentPath = [];
  drawing.push(currentPath);
}
//function endPath(){
  

//}
function draw() {
  background("black"); 
  
  if(mouseIsPressed){
  var point = {
    x : mouseX,
    y : mouseY
  }

    currentPath.push(point)

  }
 
  stroke("white")
  strokeWeight(4);
  noFill();
  for(var i = 0; i < drawing.length; i++){
    path = drawing[i];
    beginShape();
  
  for(var j = 0; j< path.length; j++){
    vertex(path[j].x,path[j].y)
  }
  endShape();

}
}