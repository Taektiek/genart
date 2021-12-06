POINT_AMOUNT = 10000
AMPLITUDE = 5
RADIUS = 400

let points = []

function setup() {
    createCanvas(800, 800);
    background(0)
    colorMode(HSB, 255)
    stroke(255, 0, 255, 5)
    strokeWeight(2)


    for (let i=0; i<POINT_AMOUNT+1; i++) {
        let new_vector = createVector(
            Math.sin((i/POINT_AMOUNT)*2*Math.PI)*200,
            Math.cos((i/POINT_AMOUNT)*2*Math.PI)*200
        )
        new_vector.y += 400
        new_vector.x += 400
        points.push(new_vector)
    }
}

function draw() {

    // stroke(Math.random()*255, 255, 100, 10)

    // background(255, 0, 255, 1)

    points.forEach(function(vect, i) {
        if (i == POINT_AMOUNT) {
            return
        }
        // stroke(255, 155+Math.random()*100, 200, 5)

        points[i].x += (Math.random()-0.5)*AMPLITUDE
        points[i].y += (Math.random()-0.5)*AMPLITUDE

        line(points[i].x, points[i].y, points[i+1].x, points[i+1].y)
    })
}