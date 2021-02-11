function mid_char(str) {
    let length = str.length
    let mid = length / 2
    mid = parseInt(mid)
    if (length % 2 == 0) {
        return (str[mid - 1] + str[mid])
    } else {
        return (str[mid])
    }
}

//RUN
let str = "inhabitant"
console.log(mid_char(str))