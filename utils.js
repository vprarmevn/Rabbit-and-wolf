let rabbitcounter = 1
let homecounter = 1
let wolfcounter = 5
let wallcounter = 5

function genMatrix(v) {
    let matrix = []
    for (let y = 0; y < v; y++) {
        matrix[y] = [];
        for (let x = 0; x < v; x++) {
            matrix[y][x] = 0
        }
    }
    setIndexInMatrixByCount(RABBIT_INDEX, rabbitcounter, matrix)
    setIndexInMatrixByCount(WOLF_INDEX, wolfcounter, matrix)
    setIndexInMatrixByCount(WALL_INDEX, wallcounter, matrix)
    setIndexInMatrixByCount(HOME_INDEX, homecounter, matrix)

    return matrix
}

function getRandomNumber(max){
    let randomnumber = Math.floor(Math.random() * max);
    return randomnumber;
}

function getRandomCell(matrix){
    let x = getRandomNumber(matrix[0].length)
    let y = getRandomNumber(matrix.length)
    if(matrix[y][x] === 0){
        return [y, x]
    }
    else{
        return getRandomCell(matrix)
    }
}

function setIndexInMatrixByCount(index, count, matrix){
    for(let i = 0; i < count; i++){
        let newCell = getRandomCell(matrix)
        let [y, x] = newCell
        matrix[y][x] = index
    }
}