function sort_num(num) {
    let i = 0
    let sum = ""
    num = num.toString().split('')

    while (i < 1) {
        if (num[i] === undefined) {
            i++
        } else {
            let max = Math.max(...num).toString()
            sum += max
            let index = num.indexOf(max)

            num.splice(index, 1)
        }
    }
    return (parseInt(sum))
}

//RUN
console.log(sort_num(1254859723))