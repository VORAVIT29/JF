console.log(hightestDigit(379))
console.log(hightestDigit(2))
console.log(hightestDigit(377401))

function hightestDigit(num) {

    /* วิธีที่ 1 */
    num = num.toString().match(/[1-9]/gi)
    return (Math.max(...num))

    /*let max = 0  //วิธีที่ 2
    for (let i = 0; i < num.length; i++) {
        if (max < num[i]) {
            max = num[i]
        }
    }
    return (max)*/

}