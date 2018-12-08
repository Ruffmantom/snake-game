
const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// we want to create a unit

const box = 32;

// now load images

const ground = new Image();
ground.src = "./img/ground.png";
const foodImg = new Image();
foodImg.src = "./img/food.png";

//create the snake

let snake = [];
snake[0] = {
x : 9 * box,
y : 10 * box
}

// create the food

let food = {
x : Math.floor(Math.random()*17+1) * box,
y : Math.floor(Math.random()*15+3) * box
}

// create the score number variable

let score = 0;

// controll the snake
document.addEventListener("keydown",direction);

let d;

function direction(event){
  if (event.keyCode == 37 && d != "RIGHT") {
    d = "LEFT";
  }else if (event.keyCode == 38 && d != "DOWN") {
    d = "UP";
  }else if (event.keyCode == 39 && d != "LEFT") {
    d = "RIGHT";
  }else if (event.keyCode == 40 && d != "UP") {
    d = "DOWN";
    }
}


// draw everthing to the canvas
function draw() {

  ctx.drawImage(ground,0,0);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = ( i == 0)? "green" : "white";
    ctx.fillRect(snake[i].x,snake[i].y,box,box);

    ctx.strokeStyle ="red";
    ctx.strokeRect(snake[i].x,snake[i].y,box,box);
  }
  ctx.drawImage(foodImg, food.x, food.y,);

// old head pos
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

// wich direction
if( d == "LEFT") snakeX -= box;
if( d == "UP") snakeY -= box;
if( d == "RIGHT") snakeX += box;
if( d == "DOWN") snakeY += box;

//if the snake eats the food
if(snakeX == food.x && snakeY == food.y){
  score++;
  food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
  }
  // we dont remove the tail
}else {
// reamove the tail
  snake.pop();
}

// add new head
let newHead = {
  x : snakeX,
  y : snakeY
}

snake.unshift(newHead);

  ctx.fillSyle = "white";
  ctx.font = "45px Changa one";
  ctx.fillText(score,2*box,1.6*box);
}
// call draw function every 100 ms

let game = setInterval(draw,100);
