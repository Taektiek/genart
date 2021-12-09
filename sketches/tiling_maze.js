function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas-parent")
    background(255)
    stroke(0)

    width = 32
    height = 32

    strokeWeight(4)
    
    for (let i=0;i<width;i++) {
        for (let j=0; j<height; j++) {
            if (Math.random() < 0.5) {
                console.log("1")
                line(i*(800/width), j*(800/height), (i+1)*(800/width), (j+1)*(800/height));
            } else {
                console.log("2")
                line((i+1)*(800/width), j*(800/height), i*(800/width), (j+1)*(800/height));
            }
        }
    }
}

function draw() {
}