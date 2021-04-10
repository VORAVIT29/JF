function posfix(expr) {

    let result = 0
    let op = expr.match(/[*/+-]/gi)
    expr = expr.split(' ')

    for (let i = 0; i < expr.length;) { //ลบค่าที่ไม่ใช่ตัวเลข
        if (expr[i] == '*') expr.splice(i, 1)
        else if (expr[i] == '/') expr.splice(i, 1)
        else if (expr[i] == '+') expr.splice(i, 1)
        else if (expr[i] == '-') expr.splice(i, 1)
        else i++
    }

    /*console.log(op)
    console.log(expr)*/

    for (let i = 0; i < expr.length; i++) {
        if (i == 0) {
            result = parseInt(expr[i])
        }

        if (op[i] == '+') {
            result += parseInt(expr[i + 1])
        } else if (op[i] == '/') {
            result /= parseInt(expr[i + 1])
        } else if (op[i] == '*') {
            result *= parseInt(expr[i + 1])
        } else if (op[i] == '-') {
            result -= parseInt(expr[i + 1])
        }
    }

    return result
}

console.log(posfix('2 2 +'))
console.log(posfix('2 2 /'))
console.log(posfix('8 4 / 9 * 3 1 * /'))
console.log(posfix("5 6 * 2 1 + /"))
console.log(posfix("10 10 * 10 /"))
console.log(posfix('1 1 + 2 2 + -'))