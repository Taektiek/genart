

function create_grid(cell_amt_x, cell_amt_y, start_x, start_y, size_x, size_y, n=0) {
    let grid_colors = [
        color(119, 150, 69),
        color(73, 117, 66),
        color(39, 69, 48),
        color(110, 60, 59),
        color(191, 64, 59),
        color(237, 179, 97),
    ]

    for (let i = 0; i < cell_amt_x; i++) {

        for (let j = 0; j< cell_amt_y; j++) {

            // if (Math.random()<0.5) {
            //     fill(255, 0, 0)
            // } else {
            //     fill(255, 0, 255)
            // }

            let random_index = parseInt(Math.random()*grid_colors.length)


            fill(grid_colors[random_index])


            if (Math.random() < 0.6 && n < 8) {
                create_grid(
                    cell_amt_x, 
                    cell_amt_y, 
                    start_x+i*(size_x/cell_amt_x),
                    start_y+j*(size_y/cell_amt_y),
                    size_x/cell_amt_x,
                    size_y/cell_amt_y,
                    n+1
                )
            } else { 
                    if (Math.random() < 1) {
                        rect(
                            start_x+i*(size_x/cell_amt_x),
                            start_y+j*(size_y/cell_amt_y),
                            size_x/cell_amt_x,
                            size_y/cell_amt_y
                        )
                    } else {
                        triangle(
                            start_x+i*(size_x/cell_amt_x),
                            start_y+j*(size_y/cell_amt_y),
                            start_x+(i+1)*(size_x/cell_amt_x),
                            start_y+j*(size_y/cell_amt_y),
                            start_x+i*(size_x/cell_amt_x),
                            start_y+(j+1)*(size_y/cell_amt_y)
                        )
                    }
            }
        }
    }
}

function setup() {
    let canvas = createCanvas(800, 800);
    canvas.parent("canvas-parent")
    background(255)

    noStroke()

    create_grid(2, 2, 0, 0, 800, 800)
}