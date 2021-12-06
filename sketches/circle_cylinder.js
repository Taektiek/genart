POINT_AMOUNT = 64
AMPLITUDE = 1
RADIUS = 400

let points = []

function create_circle(offset_x, offset_y) {
    points = []

    for (let i=0; i<POINT_AMOUNT+1; i++) {
        let new_vector = createVector(
            Math.sin((i/POINT_AMOUNT)*2*Math.PI)*200 + offset_x,
            Math.cos((i/POINT_AMOUNT)*2*Math.PI)*200 + offset_y
        )
        new_vector.y += 400
        new_vector.x += 400
        points.push(new_vector)
    }
}

function setup() {
    createCanvas(800, 800);
    background(255)
    stroke(0, 0, 0, 5)
    strokeWeight(2)

    colorMode(HSB, 255)

    create_circle(0, 0)

}

function draw() {

    // if (frameCount%240 == 0) {
    //     create_circle((Math.random()-0.5)*400, (Math.random()-0.5)*400)
    // }

    // stroke(Math.random()*255, 255, 100, 10)

    points.forEach(function(vect, i) {
        if (i == POINT_AMOUNT) {
            return
        }

        points[i].x += Math.random()*AMPLITUDE
        points[i].y += Math.random()*AMPLITUDE

        line(points[i].x, points[i].y, points[i+1].x, points[i+1].y)
    })
}