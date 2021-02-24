console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))


function numberSplit(num) {

    //.floor = ปัดเศษลง .ceil = ปักเศษขึ้น

    //return [Math.floor(num / 2), Math.ceil(num / 2)] //วิธี 1

    if (num % 2 == 0) { //วิธี 2
        return [num / 2, num / 2]
    }
    return [parseInt(num / 2 - 0.5), parseInt(num / 2 + 0.5)]
}