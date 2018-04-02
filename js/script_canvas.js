var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = 700;//window.innerHeight;

var c = canvas.getContext("2d");


function randomInteger(min, max) {

    return Math.round(Math.random() * (max - min + 1) + min);

}

function Circle(x, y, dx, dy, radius) {

	this.x = x;
	this.y = y;
	this.dy = dy;
	this.dx = dx;
	this.radius = radius;

	let red = randomInteger(0, 255);
	let green = randomInteger(0, 255);
	let blue = randomInteger(0, 255);

	this.color = "rgba(" + red + ", " + green + ", " + blue + ", 0.8)"; 

	this.update = function() {

		if (this.x < 0 || this.x > canvas.width) {
		    this.dx = -this.dx;
		}

		if (this.y < 0 || this.y > canvas.height) {
	        this.dy = -this.dy;
		}

	    this.x += this.dx;
	    this.y += this.dy;

	    this.draw();

	}

	this.draw = function() {

	    c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();

	}

}

var circleGroup = [];

for (var i = 0; i < 200; i++) {

	var radius = randomInteger(80, 100);
	var x = randomInteger(0 + radius, canvas.width - radius);
	var y = randomInteger(0 + radius, canvas.height - radius);
	var dx = randomInteger(-2, 2);
	var dy = randomInteger(-2, 2);
	
    circleGroup[i] = new Circle(x, y, dx, dy, radius);

}

function animation() {

	requestAnimationFrame(animation);
	c.clearRect(0, 0, canvas.width, canvas.height);

	for (var i = 0; i < circleGroup.length; i++) {

		circleGroup[i].update();

	}
/*
	c.beginPath();
	c.font = "200px arial";
	c.fillStyle = "white";
	c.textAlign = "center";
	c.fillText("ciao :)", canvas.width/2, canvas.height/2);
	c.fill();
	c.closePath();
*/
}

animation();