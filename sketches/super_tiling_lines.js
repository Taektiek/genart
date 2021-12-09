function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas-parent")
    background(0)
    stroke(0)

    colorMode(HSB, 255)

    width = 16
    height = 16
    strokeWeight(8)

    for (let i=0;i<width;i++) {
        for (let j=0; j<height; j++) {
            n = Math.random()

            // stroke(parseInt(Math.random()*255), 255, 255)
            stroke(255)

            if (n < 0.25) {
                line((i+0.5)*(800/width), j*(800/height), (i+0.5)*(800/width), (j+1)*(800/height));
            } else if (n > 0.25 && n < 0.5) {
                line(i*(800/width), (j+0.5)*(800/height), (i+1)*(800/width), (j+0.5)*(800/height));
            } else if (n > 0.5 && n < 0.75) {
                line(i*(800/width), j*(800/height), (i+1)*(800/width), (j+1)*(800/height));
            } else if (n > 0.75) {
                line((i+1)*(800/width), j*(800/height), i*(800/width), (j+1)*(800/height));
            }
        }
    }   
}

function draw() {
}