require('file-loader?name=[name].[ext]!./index.html');

// Style
import './main.css'

// JS vendor deps

// // Vars
let boxWidth = 300;
let boxHeight = 300;
let quantity = 3; //number of dots
let duration = 0.001;  //duration (in seconds)
let curveComplexity = 30; // number of points to draw curve from

// Set up the canvas
let box = document.getElementById('canvas');
var ctx = box.getContext('2d');
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
    plotPoints(coords);
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
    
    // Uncomment this to see dots drawn badly on curve
    // draw the points
    // for(var t=0;t<101;t+=1) {
    //     // let to = setTimeout(function(y) {
    //         // console.log(y);
    //         setPoint(points[i-1], points[i], {x:xc, y:yc}, t);
    //         // debugger;
    //     // }, t * 3, t );
    // }
}
// curve through the last two points
ctx.quadraticCurveTo(points[i].x, points[i].y, points[i+1].x,points[i+1].y);

// Stroke the path
ctx.stroke();



    // var startPoint={x:50,y:150};
    // var controlPoint={x:125,y:20};
    // var endPoint={x:200,y:150};

    // ctx.beginPath();
    // ctx.moveTo(startPoint.x,startPoint.y);
    // ctx.quadraticCurveTo(controlPoint.x,controlPoint.y,endPoint.x,endPoint.y);
    // ctx.stroke();

    // function setPoint(startPoint, controlPoint,endPoint, index) {
    //     var point = getQuadraticBezierXYatT(startPoint,controlPoint,endPoint,index/100);
    //     ctx.beginPath();
    //     ctx.arc(point.x,point.y,3,0,Math.PI*2);
    //     ctx.closePath();
    //     ctx.fillStyle = 'rgba(255, 165, 0, 0.1)';
    //     ctx.fill();
    // }

    // // draw the points
    // for(var t=0;t<101;t+=1) {
    // //     setTimeout(function(y) {
    //         // console.log(y);
    //         setPoint(startPoint, controlPoint, endPoint, t);
    //         // debugger;
    // //     }, t * 3, t );
    // }

    // function getQuadraticBezierXYatT(startPt,controlPt,endPt,T) {
    //     var x = Math.pow(1-T,2) * startPt.x + 2 * (1-T) * T * controlPt.x + Math.pow(T,2) * endPt.x; 
    //     var y = Math.pow(1-T,2) * startPt.y + 2 * (1-T) * T * controlPt.y + Math.pow(T,2) * endPt.y; 
    //     return( {x:x,y:y} );
    // }
