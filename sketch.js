
let font, font2, font3;
let points, points2, points3;
let alternate = 1;

function preload() {
  font = loadFont('HelpMe.ttf');
  font2 = loadFont('fatkat.ttf');
  font3 = loadFont('BunnyFace.ttf');
}

function setup() {
  createCanvas(600, 600);
  //textAlign(CENTER, CENTER);

  background(200);

  // Get the point array.
  points = font.textToPoints('static', 100, 120, 100, { sampleFactor:  1.5 });
  
  points2 = font2.textToPoints('seizure', 30, 300, 120, { sampleFactor:  0.5 });
  
  points3 = font3.textToPoints('chalk', 30, 500, 240, { sampleFactor:  3.5 });
  
  
  
}
function draw(){
  
  background(200);
  

  // Draw a dot at each point.
  for (let p of points) {
    stroke(random(0,255), random(0,255), random(0,255));
    
    point(p.x, p.y);
  }
  
  for (let p of points2) {
    
    if(alternate == 1){
      fill("blue");
      alternate = 2;
      
    } else {
      fill("red");
      alternate = 1;
    }
    
    
    ellipse(p.x, p.y, random(4,6), random(7,9));
  }
  
  for (let p of points3) {
    stroke("purple");
    //strokeWeight = 4;
    noFill();
    //point(random(p.x +1, p.x+5), random(p.y +1, p.y+5));
    
    ellipse(p.x, p.y, mouseX-300, mouseY-500);
    //point(p.x + mouseX, p.y +mouseY);
  }


  describe('A set of black dots outlining the text "p5*js" on a gray background.');
}