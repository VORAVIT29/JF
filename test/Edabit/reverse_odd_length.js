function reverse_odd(str) {
    let num = 0
    let sum = ""
    str = str.split(' ')

    //check String Not Array
    if (str.length == 1) {
        //str = str.join('')
        return (str.join('').split('').reverse().join(''))
    }

    for (let text of str) {
        text = str[num]

        //check letters length odd
        if (text.length % 2 == 1) {
            sum += " " + text.split('').reverse().join('')
        } else sum += " " + text

        num++
    }
    return (sum.substring(1))
}


//RUN
let str = "One two three four"
console.log(reverse_odd(str))