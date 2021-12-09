POINT_AMOUNT = 32
AMPLITUDE = 500
RADIUS = 400

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas-parent")
    background(255)
    stroke(0, 0, 0, 10)
    strokeWeight(2)
}

function draw() {
    let points = []

    for (let i=0; i<POINT_AMOUNT+1; i++) {
        let new_vector = createVector(Math.sin((i/POINT_AMOUNT)*2*Math.PI)*200, Math.cos((i/POINT_AMOUNT)*2*Math.PI)*200)
        new_vector.y += 400 + (Math.random()-0.5)*AMPLITUDE
        new_vector.x += 400 + (Math.random()-0.5)*AMPLITUDE
        points.push(new_vector)
    }

    points.forEach(function(vect, i) {
        if (i == POINT_AMOUNT) {
            return
        }
        line(points[i].x, points[i].y, points[i+1].x, points[i+1].y)
    })
}