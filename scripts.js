let rabbit
let wolfArr = []
let matrixSize = 10
let matrix = genMatrix(matrixSize)


let select = document.getElementById("select")

const changeSelectValue = (e) => {
    matrixSize = e.target.value
    matrix = genMatrix(matrixSize)
    wolfArr.length = 0
    setup()
}

select.addEventListener("change", changeSelectValue);


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * SIDE, matrix.length * SIDE);
    background('#acacac');

    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == RABBIT_INDEX) {
                rabbit = new Rabbit(x, y);
            }
            else if (matrix[y][x] == WOLF_INDEX) {
                let wolf = new Wolf(x, y)
                wolfArr.push(wolf);
            }
        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == EMPTY_INDEX) {
                fill("gray");
            }
            else if (matrix[y][x] == RABBIT_INDEX) {
                fill("yellow");
            }
            else if (matrix[y][x] == WOLF_INDEX) {
                fill("brown");
            }
            else if (matrix[y][x] == HOME_INDEX) {
                fill("white");
            }
            else if (matrix[y][x] == WALL_INDEX) {
                fill("black");
            }
            else if (matrix[y][x] == 66) {
                fill("black");
            }
            else if (matrix[y][x] == 33) {
                fill("white");
            }

            rect(x * SIDE, y * SIDE, SIDE, SIDE);
        }
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        rabbit.move(38)
    } else if (keyCode === DOWN_ARROW) {
        rabbit.move(40)
    } else if (keyCode === LEFT_ARROW) {
        rabbit.move(37)
    } else if (keyCode === RIGHT_ARROW) {
        rabbit.move(39)
    }
    for (let i in wolfArr) {
        wolfArr[i].move()
    }
}

function refresh(e){
    document.location.reload()
}
var knopka = document.getElementById("refresh")
knopka.addEventListener("click", refresh)

