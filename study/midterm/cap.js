console.log(capTofront('hApPy'))
console.log(capTofront('moveMENT'))
console.log(capTofront('shOrtCAKE'))

function capTofront(str) {

    //วิธีที่ 1
    /*let upper = str.match(/[A-Z]/g)
    let lower = str.match(/[a-z]/g)

    upper = upper.join('')
    lower = lower.join('')
    return (upper.concat(lower))*/


    // วิธีที่ 2
    let upper = ""
    let lower = ""
    for (let i = 0; i < str.length; i++) {

        if (str[i] === str[i].toUpperCase()) {
            upper += str[i]
        } else {
            lower += str[i]
        }

    }
    return (upper.concat(lower))
}