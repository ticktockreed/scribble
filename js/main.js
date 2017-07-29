let box = document.getElementById('canvas');
var ctx = box.getContext('2d');

let boxWidth = 300;
let boxHeight = 300;
let quantity = 3; //number of dots
let duration = 0.001;  //duration (in seconds)

box.className = 'box';

ctx.canvas.width = boxWidth;
ctx.canvas.height = boxHeight;

document.body.appendChild(box);

var points = new Array(30);

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

function createDomElements(coords) {
    ctx.fillStyle = 'green';
    console.log(coords);
    ctx.fillRect(coords.y, coords.x, 5, 5);
}

// add the points to the page
for (var i = 0; i < points.length; i++) {
    let coords = randomCoords();
    points[i] = {};
    points[i].x = coords.x;
    points[i].y = coords.y;
    createDomElements(coords);
}

// create bezier 

// move to the first point
ctx.moveTo(points[0].x, points[0].y);

for (i = 1; i < points.length - 2; i ++) {
    var xc = (points[i].x + points[i + 1].x) / 2;
    var yc = (points[i].y + points[i + 1].y) / 2;
    ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
}
// curve through the last two points
ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);