function char_frist(str) {
    let text = ""

    str = str.toLowerCase().split(' ')

    for (let out of str) {
        if (out == "in" || out == "and" || out == "the" || out == "of") {
            text += " " + out
            continue;
        }
        text += " " + out[0].toUpperCase() + out.slice(1)
    }
    return (text.slice(1))
}


//RUN
let str = "MANCE RAYDER, KING-BEYOND-THE-WALL."
console.log(char_frist(str))