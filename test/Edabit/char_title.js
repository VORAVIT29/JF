//Open function Check letters special
function check_letters_special(arry, space) {
    let sum = ""

    for (let out of arry) {

        if (out == "in" || out == "and" || out == "the" || out == "of") {
            sum += space + out
            continue;
        }

        sum += space + out[0].toUpperCase() + out.slice(1)
    }

    return (sum)
} //close function check letters special




//open function char frist
function char_frist(str) {
    let check = str.match(/[-]/gi)
    let text = ""

    str = str.toLowerCase().split(' ')

    //Get function check letters special
    text = check_letters_special(str, ' ')

    //Check Not Letters Spacial
    if (check === undefined || check === null) {
        return (text.slice(1))
    }

    let text2 = text.split(',').slice(1).toString().split('-')
    let totaltext = ""

    totaltext = check_letters_special(text2, "-")

    totaltext = totaltext.slice(1)
    text = text.slice(1).split(',')
    text[1] = totaltext

    return (text.join(','))

} //close function char frist


//RUN
let str = "MANCE RAYDER, KING-BEYOND-THE-WALL."
console.log(char_frist(str))