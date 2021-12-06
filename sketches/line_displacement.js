POINT_AMOUNT = 16
AMPLITUDE = 500

function setup() {
    createCanvas(800, 800);
    background(255)
    stroke(0, 0, 0, 10)
    strokeWeight(2)
}

function draw() {
    let points = []

    for (let i=0; i<POINT_AMOUNT+1; i++) {
        let new_vector = createVector((800/POINT_AMOUNT)*i, 400)
        new_vector.y += (Math.random()-0.5)*AMPLITUDE
        points.push(new_vector)
    }

    points.forEach(function(vect, i) {
        if (i == POINT_AMOUNT) {
            return
        }
        line(points[i].x, points[i].y, points[i+1].x, points[i+1].y)
    })
}