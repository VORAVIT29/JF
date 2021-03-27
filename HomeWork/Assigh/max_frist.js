function maxPossible(num1, num2) {
    num1 = num1.toString().split('')
    num2 = num2.toString().split('');
    //เรียงค่าน้อยไปมาก และ reverse หน้าหลังหลังหน้า
    num2.sort().reverse()
    for (const key in num1) {
        if (num2[0] > num1[key]) {
            num1[key] = num2[0];
            //ลบตำแหน่งที่กำหนด
            num2.splice(0, 1)
        }
    }
    return num1.join('')
}

//RUN
console.log(maxPossible(523, 76))
console.log(maxPossible(9132, 5564))
console.log(maxPossible(8732, 91255))
console.log(maxPossible(9328, 456))
console.log(maxPossible(523, 76))
console.log(maxPossible(9132, 5564))
console.log(maxPossible(8732, 91255))
console.log(maxPossible(589, 777))
console.log(maxPossible(1, 0))
console.log(maxPossible(8, 9))
console.log(maxPossible(28, 19))
console.log(maxPossible(12345, 4))