function revers(text) {
    let sum = ""
    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i].toLowerCase()) {
            sum += text[i].toUpperCase()
        } else {
            sum += text[i].toLowerCase()
        }
    }
    return (sum)
}


//RUN
console.log(revers("Happy Birthday"))