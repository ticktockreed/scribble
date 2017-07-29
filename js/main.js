let box = document.createElement('div');
let boxWidth = 300;
let boxHeight = 300;
let quantity = 300; //number of dots
let duration = 0.001;  //duration (in seconds)

box.className = 'box';

box.style.width = boxWidth + 'px';
box.style.height = boxHeight + 'px';

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
    let pointEl = document.createElement('div');
    pointEl.className = 'point';
    pointEl.style.top = coords.y + 'px';
    pointEl.style.left = coords.x + 'px';

    box.appendChild(pointEl);
}

// add the points to the page
for (var i = 0; i < points.length; i++) {
    let coords = randomCoords();
    points[i] = {};
    points[i].x = coords.x;
    points[i].y = coords.y;
    createDomElements(coords);
}

var tl = new TimelineMax({repeat:10, yoyo:true});       


//we can remove the first point on the path because the position is already there and we want to draw the Bezier from there through the other points
//path.shift();

for (i = 0; i < quantity; i++) {
    //create a new dot, add the .dot class, set the position, and add it to the body.	
    let dot = document.createElement('div');
    dot.className = 'dot';
    box.appendChild(dot); 
    //create a tween for the dot that travels the full path of the bezier  
    var t = TweenMax.to(dot, duration, {bezier:points, paused:true, ease:Linear.easeNone});
    //tween the progress of the tween so that each dot only travels a decreasing percentage of the full path
    TweenLite.to(t, duration - (duration * i/quantity), {progress:1- i/quantity, ease:Linear.easeNone, delay:i*0.3});
}
