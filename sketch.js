/*
2/9/18, Firework Flowers: Lunar Festival by Shirley Xu. This animation aims to celebrate Lunar New Year by
displaying flower shaped fireworks that explode several times and then reconstruct. Documentation can be viewed
on https://algorithmarathon.wordpress.com/2018/02/08/final-project-firework-flowers/
The original code for making a flower can be viewed on https://p5js.org/examples/hello-p5-simple-shapes.html
*/

var firework = []; // creates firework array that will contain future fireworks

function Firework() { // creates constructor Firework
  this.x = 12; // ellipse's x coordinate
  this.y = 50; // ellipse's y coordinate
  this.wide = 20; // width of ellipse
  this.long = 80; // height of ellipse
  this.flowSpeed = random(1,3); // random speed of firework exploding

  this.show = function() {
    translate(0, 0); //  displaces firework flower by 0,0
    fill(random(255), 0, random(255)); // makes a random purple color for the flower 
    for (var i = 0; i < 12; i++) { // flower code from p5.js site, 12 petals
      ellipse(this.x, this.y, this.wide, this.long);
      rotate(PI / 6); //rotates petals by pi/6. 
    }
  }
  this.move = function() {
    this.x = this.x + this.flowSpeed; // the ellipses fly out with speed flowSpeed
    this.y = this.y + this.flowSpeed; // the ellipses fly out with speed flowSpeed
    if (this.x > width || this.x < 0) { // if ellipses are out of constrains, they return back to the center 
      this.flowSpeed = this.flowSpeed * -1;
    }
  }

}

var word = ["Happy", "Lunar", "New", "Year!"]; // array for text to show up 
var index = 0; // index of array

var moon = { // object literal for moon
  x: 0, //x coordinate
  y: 0, // y coordinate
  diam: 200, // moon size
  r : 255, // r color
  g: 255, // g color
  b: 224 // b color
}

var words = { //object literal for text
  x: -400, // x coordinate of text location
  y: -400, // y coordinate of text location
  speed: 1, // speed of text across screen
  r:255,
  g:0,
  b:0
}


function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 4; i++) { // creates four fireworks that branch out of one flower 
    firework[i] = new Firework();
  }
}

function draw() {
  background(0); // black background
  fill(moon.r, moon.g, moon.b);
  ellipse(moon.x, moon.y, moon.diam, moon.diam); //the ellipse is located at moon.x and moon.y with size moon.diam
  moon.x = moon.x + 1; // moon moves 
  moon.y = moon.y + 1; //moon moves
  flower(); // places flower in middle
  flower2(); //places flower at bottom
  fill(words.r, words.g, words.b); // makes text red
  textSize(40); // makes text size 40
  text(word[index], words.x, words.y); //displays words[index] one at a time
  words.x = words.x + words.speed; // makes text move across screen
  if (words.x > width) { //if text is outside of window, it reappears inside window
    words.x = -400;
  }
  
}

function keyPressed() {
  index = index + 1; //when key is pressed, the words loop through the array
  if (index === 4) {
    index = 0; // when the words have looped through, they go back to beginning
  }
}

var fireFlower = { // object literal for a static flower
  x: 12, // flower's x coordinate
  y: 50, // flower's y coordinate
  wide:20, // width of ellipses
  long:80 // length of ellipses
}

function flower() {
  fill(random(255), random(255), random(255)); // creates flashing random color
  translate(width / 2, height / 2); // places flower in middle
  for (i = 0; i < 12; i++) { //makes 12 petal flower
    ellipse(fireFlower.x, fireFlower.y, fireFlower.wide, fireFlower.long); //ellipse with object properties
    rotate(PI / 6);
  }

  for (var i = 0; i < firework.length; i++) { //iterates through firework array 
    firework[i].show(); //shows firework
    firework[i].move(); // firework explodes four times because there are 4 fireworks in array
  }

}

function flower2() {
  fill(random(255), random(255), random(255)); //random color to flower
  translate(200, 200); // places flower at bottom
  for (i = 0; i < 12; i++) { // makes 12 petal flower
    ellipse(fireFlower.x, fireFlower.y, fireFlower.wide, fireFlower.long); // ellipse with object properties
    rotate(PI / 6);
  }

  for (var i = 0; i < firework.length; i++) { //iterates through firework array
    firework[i].show(); //shows firework
    firework[i].move(); // firework explodes four times
  }
}

