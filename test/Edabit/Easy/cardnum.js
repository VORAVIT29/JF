function card_num(str) {
    str = str.split('')
    let num = str.length - 4
    let sum = ""

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) < num) {
            str[i] = "*"
        }
    }
    return (str.join(''))
}


//RUN
console.log(card_num("1234123456785678"))