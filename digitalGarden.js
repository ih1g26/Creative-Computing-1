function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);
  camera(0,-2000,-2000);
}
const plantPots = [];
let wiltCount = 0;


function draw() {
  let stalks = [
  "#4F7942",
  "#355E3B",
  "#5F8575",
  "#8A9A5B",
  "#004700"
  ];
  
  let centre = [
  "#E1C16E",
  "#E4D00A",
  "#FFC000",
  "#DAA520",
  "#FBEC5D"
  ];
  
  let flowers = [
  "#DE3163",
  "#FFB6C1",
  "#FF69B4",
  "#E0115F",
  "#FFC0CB"
  ];
  
background(255);
orbitControl();
  
if(keyIsDown(ENTER)){
  let count = 0
  if(count < 1){
    plantPots.push([random(-180, 180), //0: x position
                    random(-180, 180), //1: y position
                    random(5, 30), //2: starting height
                    random(1, 3), //3: growth speed
                    random(stalks), //4: stem colour
                    random(500, 1000), //5: max height
                    random(centre), //6: centre colour
                    random(flowers), //7: flower colour
                    random(-300,0), //8: leaf position 1
                    random(0,50)]) //9: leaf position 2
  count += 1;
  wiltCount = 0;}
  }
  
if(keyIsDown(UP_ARROW)){
//Double growth while pressing (watering the plants)
  let len = plantPots.length;
  for (let i = 0; i < len; i++){
    if (plantPots[i][2] < plantPots[i][5]){
      plantPots[i][2] += 3}
    }
  wiltCount = 0
  }
  
if(keyIsDown(DOWN_ARROW)){
//Shrink while pressing (cutting the grass)
  let len = plantPots.length;
  for (let i = 0; i < len; i++){
    if(plantPots[i][2] >= 0){
      plantPots[i][2] -= 20}
    }
  }
  
push();
let len = plantPots.length;
for (let i = 0; i < len; i++){
  translate(plantPots[i][0], 0, plantPots[i][1]);
  fill(plantPots[i][4]);
  noStroke();
  cylinder(10, plantPots[i][2]);
  if(wiltCount >= 1000 && plantPots[i][2] >= 0){
    plantPots[i][2] -= plantPots[i][3];
  }
  else if (plantPots[i][2] < plantPots[i][5]){
    plantPots[i][2] += plantPots[i][3];}
  else{
    //flower middle
    push();
    translate(0, -plantPots[i][5]/2, 0);
    fill(plantPots[i][6])
    sphere(20)
    pop();

    //leaf
    push();
    translate(-20-plantPots[i][9], plantPots[i][8], 0);
    fill(plantPots[i][4]);
    beginShape();
      splineVertex(32, 91);
      splineVertex(21, 17);
      splineVertex(68, 19);
      splineVertex(82, 91);
    endShape(CLOSE);
    pop();

    //petal
    push();
    translate(-50, -50 -plantPots[i][5]/2, 0);
    fill(plantPots[i][7]);
    beginShape();
      splineVertex(32, 91);
      splineVertex(21, 17);
      splineVertex(68, 19);
      splineVertex(82, 91);
    endShape(CLOSE);
    pop();
    }
  }
pop();

wiltCount += 1
}


function mouseClicked(){
plantPots.pop()
}
