console.log(sum_time(['1:23:45']))
console.log(sum_time(['1:03:45'], ['1:23:05']))
console.log(sum_time(['5:39:42'], ['10:02:08'], ["8:26:33"]))
console.log(sum_time())

function sum_time() {
    let hr = min = se = 0
    let newarr = []
    for (let i = 0; i < arguments.length; i++) {

        for (let j = 0; j < arguments[i].length; j++) {

            newarr.push(arguments[i][j].toString().split(':'))

        }
    }

    for (let i = 0; i < newarr.length; i++) {
        for (let j = 0; j < newarr[i].length; j++) {

            if (j == 0) hr += parseInt(newarr[i][j])
            else if (j == 1) min += parseInt(newarr[i][j])
            else if (j == 2) se += parseInt(newarr[i][j])

        }
    }
    if (min > 60) {
        min = min - 60
        hr += 1
    }
    if (se > 60) {
        se = se - 60
        min += 1
    }
    return [hr, min, se]
}