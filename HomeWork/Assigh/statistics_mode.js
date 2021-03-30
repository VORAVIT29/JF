function mode(arry) {
    let array_new = []
    let array_count = []

    //หาตัวเลขแต่ละตำแหน่งว่ามีกี่ตัว
    for (const key in arry) {
        let count = arry.filter(i => i == arry[key]).length
        array_count.push(count)
    }

    //ลบเลชซ้ำออกแต่ต้องเป็นเลขเดียวกัน
    for (let i = 0; i < arry.length;) {
        if (arry[i] == arry[i + 1]) {
            let index = arry.indexOf(arry[i]) //หาตำแหน่งที่ซ้ำ
            arry.splice(index, 1)
            array_count.splice(index, 1)
        } else {
            i++
        }
    }

    let max = Math.max(...array_count)
    for (const key in array_count) {
        if (array_count[key] == max) { //เก็บค่าตัวเลขที่มีค่าซ้ำกันมากที่สุด
            array_new.push(arry[key])
        }
    }
    return array_new
}

//RUN
console.log(mode([4, 5, 6, 6, 6, 7, 7, 9, 10]))
console.log(mode([4, 5, 5, 6, 7, 8, 8, 9, 9]))
console.log(mode([1, 2, 2, 3, 6, 6, 7, 9]))