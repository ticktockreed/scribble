require('file-loader?name=[name].[ext]!./index.html');

// Style
import './main.css'

// JS vendor deps

// Vars
let boxWidth = 300;
let boxHeight = 300;
let quantity = 3; //number of dots
let duration = 0.001;  //duration (in seconds)
let curveComplexity = 20; // number of points to draw curve from

// Set up the canvas
let box = document.getElementById('canvas');
var ctx = box.getctx('2d');
box.className = 'box';
ctx.canvas.width = boxWidth;
ctx.canvas.height = boxHeight;
document.body.appendChild(box);

// Create the points
var points = new Array(curveComplexity);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function randomCoords() {
    let x = getRandomArbitrary(0, boxWidth);
    let y = getRandomArbitrary(0, boxHeight);

    return {
        x: Math.ceil(x), 
        y: Math.ceil(y)
    }
}

function plotPoints(coords) {
    ctx.fillStyle = 'green';
    console.log(coords);
    ctx.fillRect(coords.y, coords.x, 5, 5);
}

// Set point Coords
for (var i = 0; i < points.length; i++) {
    let coords = randomCoords();
    points[i] = {};
    points[i].x = coords.x;
    points[i].y = coords.y;
    // plotPoints(coords);
}

// Set up the path on the canvas
ctx.linewidth = 100;
ctx.strokeStyle = '#000';
ctx.beginPath();

// CREATE A PATH THROUGH ALL OF THE POINTS

// move to the first point
ctx.moveTo(points[0].x, points[0].y);

for (i = 1; i < points.length - 2; i ++) {
    var xc = (points[i].x + points[i + 1].x) / 2;
    var yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
}
// curve through the last two points
ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);

// Stroke the path
ctx.stroke();


then = Date.now();
setInterval(main, 1);

var cube_x_position = 0;

function main()
{
	ctx.beginPath();
	ctx.moveTo(100, 20);
	ctx.lineTo(200, 160);
	ctx.quadraticCurveTo(230, 200, 250, 120);
	ctx.bezierCurveTo(290, -40, 300, 200, 400, 150);
	ctx.lineTo(500, 90);
	ctx.lineWidth = 5;
	ctx.strokeStyle = 'blue';
	ctx.stroke();

	ctx.fillRect(cube_x_position, 0, canvasHolder.width, canvasHolder.height);

	if(cube_x_position < canvasHolder.width)
	{
		cube_x_position += 1;
	}

}