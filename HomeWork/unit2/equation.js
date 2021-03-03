const equation = (str) => {
    op = str.match(/[*+-]/gi)
    for (let i = 0; i < str.length + 1; i++) { /* for แยกตัว Operator กับตัวเลขออกจากกัน */
        if (str[i] == '*') str = str.split('*').toString()
        if (str[i] == '+') str = str.split('+').toString() //1,1
        if (str[i] == '-') str = str.split('-').toString()
        if (str[i] === undefined) str = str.split(',') //['1','1']
    }
    //console.log(str)

    let num = 0
    for (let i = 0; i < op.length; i++) {
        if (op[i] == '*') num = str[0] = parseInt(str[0]) * parseInt(str[i + 1])
        else if (op[i] == '+') num = str[0] = parseInt(str[0]) + parseInt(str[i + 1])
        else if (op[i] == '-') num = str[0] = parseInt(str[0]) - parseInt(str[i + 1])
    }
    return (num)
};
/* RUN */
console.log(equation("1+1"))
console.log(equation("7*4-2"))
console.log(equation("1+1+1+1+1"))

console.log(equation("15+5+10"))
console.log(equation("105+53"))
console.log(equation("65*2-5+64"))