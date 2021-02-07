class Wolf {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.index = WOLF_INDEX
        this.directions = []
    }

    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
        ];
    }

    getEnemiCordinateByIndex(enemyIndex) {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == enemyIndex) {
                    return [x, y]
                }
            }
        }
    }

    calculateDistance() {
        this.getNewCoordinates()
        let [enemyX, enemyY] = this.getEnemiCordinateByIndex(RABBIT_INDEX)
        let distanceArr = []
        for (let i in this.directions) {
            let [x, y] = this.directions[i]
            let distance = Math.sqrt((enemyX - x) ** 2 + (enemyY - y) ** 2)
            distanceArr.push(distance)
        }
        return distanceArr
    }

    getMinimalElementFromArray(minArr, arrValue) {
        let min = Math.min(...minArr)
        for (let i = 0; i < minArr.length; i++) {
            if (minArr[i] == min) {
                return arrValue[i]
            }
        }
    }

    getFinelShortCell() {
        let minArr = this.calculateDistance()
        let shortCell = this.getMinimalElementFromArray(minArr, this.directions)
        if (matrix[shortCell[1]][shortCell[0]] == 0 || matrix[shortCell[1]][shortCell[0]] == 1) {
            return shortCell
        }
    }

    move() {
        let newvandak = this.getFinelShortCell()
        if (newvandak && matrix[newvandak[1]][newvandak[0]] == 1) {
            this.eat()
        }
        else if (newvandak && matrix[newvandak[1]][newvandak[0]] == 0) {
            matrix[newvandak[1]][newvandak[0]] = this.index
            matrix[this.y][this.x] = 0
            this.x = newvandak[0]
            this.y = newvandak[1]
        }
    }

    eat() {
        let newvandak = this.getFinelShortCell()
        matrix[newvandak[1]][newvandak[0]] = this.index
        matrix[this.y][this.x] = 0
        this.x = newvandak[0]
        this.y = newvandak[1]
        rabbit = null
        wolfArr.length = 0
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 66
            }
        }
    }
}


