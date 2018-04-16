var parent = document.body;
var canvas = document.getElementById("canvas"),
	ctx;

var width  = 400,
	height = 400;

var interval_rate = 0.025,
	interval_delay = interval * 1000,
	interval;

const g = 9.81; //gravitational constant

var ball = {
	ID: "ball",
	position: {x: width / 2, y: height / 6}, // initial ball position
	velocity: {x: 0, y: 0}, // initial ball speed
	radius: 10, // ball radius
	bounce: -0.65 // ball bouncing force 0: without bouncing, 1: infinite bouncing
};

function create_canvas() {
	ctx = canvas.getContext("2d");
    ctx.fillStyle   = '#333333';

    interval = setInterval(start_move, interval_delay);
}

function start_move(){

	ball.velocity.y += g * interval_rate / 7;
	ball.position.y  = ball.position.y + ball.velocity.y;

	if (ball.position.y > height - ball.radius)
	{
        ball.velocity.y *= ball.bounce;
        ball.position.y  = height - ball.radius;
    }

	ctx.clearRect(0,0,width,height);
    ctx.save();
    ctx.translate(ball.position.x, ball.position.y);
    ctx.arc(0, 0, ball.radius, 0, Math.PI*2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.closePath();
    ctx.restore();

}

create_canvas();
