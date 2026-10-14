function setup() {
  createCanvas(400, 400);
  background(255);
}

  let yCount = 0
  let xCount = 0

  let circleSizes = 40
refresh = 0

function draw() {

  let fuzz = [
"#E0E0E0",
"#BABABA",
"#828282",
"#454545",
"#121212"
];
  
if (xCount < width){
    push();
    fill(random(fuzz))
    square(xCount, yCount, 10);
    pop();
}
else if(yCount < height){
  xCount = 0
  yCount += 10
}
else{
  yCount = 0
  xCount = 0
}
  xCount += 10


  if (frameCount > 1600*refresh){
    refresh += 1
    circleSizes -= 3
  }
  
  strokeWeight(0);
  circle(mouseX, mouseY, circleSizes);
}
