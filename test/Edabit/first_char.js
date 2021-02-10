function remove_first(str) {

    let i = 0
    let sum = ""
    for (let t of str) {
        sum += str[++i]
        if (i == str.length - 1) break;
    }
    return (sum)
}

//RUN
console.log(remove_first("cherry"))