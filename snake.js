const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// we want to create a unit

const box = 32;

// now load images

const ground = new Image();
ground.src = "img/ground.png";
const food = new Image();
foor.src = "img/food.png";

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

// draw everthing to the canvas
