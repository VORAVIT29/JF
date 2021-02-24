function totalVolume() {
    //console.log(arguments.length)

    //วิธีที่ 1
    let sum = 0
    let i = 0;
    for (let check of arguments) {
        let numobject = 1

        for (check of arguments[i]) {
            numobject *= check
        }

        sum += numobject
        i++
    }
    return (sum)

    // วิธีที่ 2
    /*let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        let object = arguments[i]
        let sub = 1

        for (let index = 0; index < object.length; index++) {
            sub *= object[index]
        }

        sum += sub
    }
    return (sum)*/
}

//RUN
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]))
console.log(totalVolume([2, 2, 2], [2, 1, 1]))
console.log(totalVolume([1, 1, 1]))
console.log(totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]))