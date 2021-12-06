function setup() {
    createCanvas(400, 400);
    background(255)
    stroke(0)

    width = 32
    height = 32

    strokeWeight(4)
    
    for (let i=0;i<width;i++) {
        for (let j=0; j<height; j++) {
            if (Math.random() < 0.5) {
                console.log("1")
                line((i+0.5)*(400/width), j*(400/height), (i+0.5)*(400/width), (j+1)*(400/height));
            } else {
                console.log("2")
                line(i*(400/width), (j+0.5)*(400/height), (i+1)*(400/width), (j+0.5)*(400/height));
            }
        }
    }
}

function draw() {
}