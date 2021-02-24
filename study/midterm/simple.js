function simplePair(array, ans) {

    let newArr = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            if (i != j) {
                if (array[i] * array[j] == ans) {
                    newArr.push(array[i], array[j])
                    array.splice(i, 1)
                    array.splice(j, 1)
                }
            }
        }
    }

    //Check  Empty Array
    if (newArr[0] === undefined) return (null);
    return newArr
}


//RUN
console.log(simplePair([1, 2, 3], 3))
console.log(simplePair([1, 2, 3], 6))
console.log(simplePair([1, 2, 3], 9))