function removeDups(array) {
    //วิธีที่ 1
    //return [...new Set(array)]

    //วิธีที่ 2
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i != j) {
                if (array[i] == array[j]) {
                    array.splice(j, 1)
                }
            }
        }
    }

    return (array)
}


//RUN
console.log(removeDups([1, 0, 1, 0]))
console.log(removeDups(['The', 'big', 'cat']))
console.log(removeDups(['John', 'Tylor', 'John']))