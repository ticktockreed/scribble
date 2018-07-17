require('file-loader?name=[name].[ext]!./index.html');

// Style
import './main.css'

// JS vendor deps

// // Vars
const boxWidth = 300;
const boxHeight = 300;
const quantity = 3; //number of dots
const duration = 0.001;  //duration (in seconds)
const curveComplexity = 5; // number of points to draw curve from

// Set up the canvas
const box = document.getElementById('canvas');
var ctx = box.getContext('2d');
box.className = 'box';
ctx.canvas.width = boxWidth;
ctx.canvas.height = boxHeight;
document.body.appendChild(box);

// Create the points
var points = new Array(curveComplexity);

// get random position given min and max value
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// create random x y coordinates
function randomCoords() {
    const x = getRandomArbitrary(0, boxWidth);
    const y = getRandomArbitrary(0, boxHeight);

    return {
        x: Math.ceil(x), 
        y: Math.ceil(y)
    }
}

// plot the points on the canvas
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
    plotPoints(coords);
}

// Set up the path on the canvas
ctx.linewidth = 100;
ctx.strokeStyle = '#000';
ctx.beginPath();

// CREATE A PATH THROUGH ALL OF THE POINTS

// move to the first point
ctx.moveTo(points[0].x, points[0].y);

// create line through the points on the curve
for (i = 1; i < points.length - 2; i ++) {
    var xc = (points[i].x + points[i + 1].x) / 2;
    var yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
}

// curve through the last two points
ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);

// Stroke the path
// ctx.stroke();

// Draw dots on the path?
