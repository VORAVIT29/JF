function isPandigital(number) {
    //(0-9)มีทั้งหมด 10 ตัว
    arr_num = 10
    number = number.toString().split('');
    //สร้างอาเรย์ใหม่โดยไม่มีตัวเลขซ้ำกัน
    number2 = new Set(number)

    //เช็คว่าถ้าเลข (0 - 9) มีทุกตัวจะ แสดงค่า true
    if (arr_num === number2.size) {
        return true
    } else return false
}

//RUN
console.log(isPandigital(98140723568910))
console.log(isPandigital(90864523148909))
console.log(isPandigital('112233445566778899')) //ที่ทำเป็น ' string ' เพราะ ถ้าส่งค่าเป็น ' ตัวเลข ' ไปหาฟังชั่นมันจะเป็นเลขทุกตัวตั้งแต่ (0 - 9)
console.log(isPandigital(84847473937))
console.log(isPandigital(546732965015))
console.log(isPandigital(6781235184590))
console.log(isPandigital(9432821089765))
console.log(isPandigital(629764))
console.log(isPandigital(90864523148909))
console.log(isPandigital(7296012))
console.log(isPandigital(647380265483206))
console.log(isPandigital(38165975424790))
console.log(isPandigital(8146327815320))
console.log(isPandigital(768431605430))
console.log(isPandigital(4920124852367763))
console.log(isPandigital(60543981597247))
console.log(isPandigital(10282343456789))