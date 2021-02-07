class Rabbit {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.index = RABBIT_INDEX;
        this.directions = []
    }

    chooseCell(matrixIndex, keyCode) {
        if (keyCode == 38) {
            this.verev()
        }
        else if (keyCode == 40) {
            this.nerqev()
        }
        else if (keyCode == 37) {
            this.dzax()
        }
        else if (keyCode == 39) {
            this.aj()
        }
        let x = this.directions[0]
        let y = this.directions[1]
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == matrixIndex) {
                return this.directions
            }
        }
        else if (y < 0 && x >= 0 && x < matrix.length) {
            if (matrix[y + matrix.length][x] == matrixIndex) {
                return [x, y + matrix.length]
            }
        }
        else if (y > matrix.length - 1 && x >= 0 && x < matrix.length) {
            if (matrix[y - matrix.length][x] == matrixIndex) {
                return [x, y - matrix.length]
            }
        }
        else if (x < 0 && y >= 0 && y < matrix.length) {
            if (matrix[y][x + matrix.length] == matrixIndex) {
                return [x + matrix.length, y]
            }
        }
        else if (x > matrix.length - 1 && y >= 0 && y < matrix.length) {
            if (matrix[y][x - matrix.length] == matrixIndex) {
                return [x - matrix.length, y]
            }
        }
    }

    verev() {
        this.directions = [this.x, this.y - 1];
    }
    nerqev() {
        this.directions = [this.x, this.y + 1];
    }
    dzax() {
        this.directions = [this.x - 1, this.y];
    }
    aj() {
        this.directions = [this.x + 1, this.y];
    }

    move(keyCode) {
        let arr1 = this.chooseCell(EMPTY_INDEX, keyCode)
        if (arr1 != undefined && arr1.length > 0) {
            let [norx, nory] = arr1
            matrix[nory][norx] = this.index
            matrix[this.y][this.x] = EMPTY_INDEX
            this.x = norx
            this.y = nory
        }else{
            this.goHome(keyCode)
        }
    }

    goHome(keyCode) {
        let arr2 = this.chooseCell(HOME_INDEX, keyCode)
        if (arr2 != undefined && arr2.length > 0) {
            matrix[arr2[1]][arr2[0]] = this.index
            matrix[this.y][this.x] = 0
            this.x = arr2[0]
            this.y = arr2[1]
            wolfArr.length = 0
            rabbit = null
            for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
                    matrix[y][x] = 33
                }
            }
        }
    }
}


