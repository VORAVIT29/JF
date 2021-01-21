let values1 = ['Apple', 1, false]
let values2 = ['Fries', 2, true]
let values3 = ['Mars', 9, 'Apple']

let CheckType = (arry1, arry2) => {
    let i = 0
    let keep = []
    for (let check of arry1) {
        keep.push(typeof(arry1[i]) === typeof(arry2[i]))
        i++
    }
    return keep
};
/* RUN */
console.log(CheckType(values1, values2))
console.log(CheckType(values2, values3))
console.log(CheckType(values3, values1))