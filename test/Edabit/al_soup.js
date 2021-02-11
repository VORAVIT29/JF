function alphabet_soup(str) {
    let sum = []

    for (let i = 0; i < str.length; i++) {
        sum[i] = str.charCodeAt(i)
    }

    let check = true
    str = ""

    while (check) {
        let min = Math.min(...sum)
        let index = sum.indexOf(min)

        sum.splice(index, 1)

        //convert number ascil to Letter
        str += String.fromCharCode(min)

        //check ArreySum is that empty 
        if (sum[0] === undefined) break
    }
    return (str)
}


//RUN
let str = "javascript"
console.log(alphabet_soup(str))