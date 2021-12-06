function setup() {
    createCanvas(400, 400);
    background(0)
    stroke(0)

    colorMode(HSB, 255)

    width = 32
    height = 32
    strokeWeight(4)

    for (let i=0;i<width;i++) {
        for (let j=0; j<height; j++) {
            n = Math.random()

            // stroke(parseInt(Math.random()*255), 255, 255)
            stroke(255)

            if (n < 0.25) {
                line((i+0.5)*(400/width), j*(400/height), (i+0.5)*(400/width), (j+1)*(400/height));
            } else if (n > 0.25 && n < 0.5) {
                console.log("recte lijn")
                line(i*(400/width), (j+0.5)*(400/height), (i+1)*(400/width), (j+0.5)*(400/height));
            } else if (n > 0.5 && n < 0.75) {
                line(i*(400/width), j*(400/height), (i+1)*(400/width), (j+1)*(400/height));
            } else if (n > 0.75) {
                line((i+1)*(400/width), j*(400/height), i*(400/width), (j+1)*(400/height));
            }
        }
    }   
}

function draw() {
}