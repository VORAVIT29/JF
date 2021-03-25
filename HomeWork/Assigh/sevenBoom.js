function sevenBoom(arr) {
    let mas = "there is no 7 in the array"
    for (let i of arr) {
        if (i == 7) {
            mas = "Boom!"
            break
        }
        //เช็คว่าตัวเลขที่ตำแหน่งนั้นมีความยาวมากกว่า 1 ไหม(สองตำแหน่ง)
        if (i.toString().length > 1) {
            str = i.toString()
            for (let j = 0; j < str.length; j++) {
                if (str[j] == 7) {
                    mas = "Boom!"
                }
            }
        }
    }
    return (mas)
}
//RUN
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([8, 6, 33, 100]))
console.log(sevenBoom([2, 55, 60, 97, 86]))
console.log(sevenBoom([2, 6, 7, 9, 3]))
console.log(sevenBoom([33, 68, 400, 5]))
console.log(sevenBoom([86, 48, 100, 66]))
console.log(sevenBoom([76, 55, 44, 32]))
console.log(sevenBoom([35, 4, 9, 37]))