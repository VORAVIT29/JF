function sumTwoSmallestNums(array) {

    let sumtwo = []

    for (let i = 0; i < array.length; i++) {
        let numMin = Math.min(...array)

        //ไม่เอาเลขติดลบ
        if (numMin < 0) {
            let index = array.indexOf(numMin)
            array.splice(index, 1)

        } else {
            sumtwo.push(numMin)
            let index = array.indexOf(numMin)
            array.splice(index, 1)
        }

        if (sumtwo.length == 2) break;

        //Create i = 0
        i = 0
    }

    return (sumtwo.reduce((a1, a2) => a1 + a2))
}

//RUN
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453, ]))
console.log(sumTwoSmallestNums([2, 9, 6, -1]))
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, -791, -587]))
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]))