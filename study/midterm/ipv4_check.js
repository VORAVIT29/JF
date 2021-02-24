function isValidIP(IPV4) {

    IPV4 = IPV4.split('.')
    let check = false
    let overnum = false

    //Check IPV4 length Not 4
    if (IPV4.length == 4) {
        check = true
    } else return (false)


    if (check) {
        let numlast = IPV4[IPV4.length - 1]
        let pos = numlast[0]

        for (let i = 0; i < IPV4.length; i++) {

            //เช็คค่า IPV4 มีค่าเท่ากับ 0 และ i ต้องไม่เท่ากับค่า index สุดท้าย
            if (IPV4[i] == 0 && i != IPV4.length - 1) {
                continue;
            }

            //เช็คค่าสุดท้ายว่ามีความยาว 3 ตัว
            if (numlast.length >= 3) {

                //เช็คว่าตำแหน่งแรกมีค่าเป็น 0 ไหม
                if (pos == 0) {
                    return (false)
                }
            }

            //เช็ค IPV4 ต้องมีเลขระหว่าง 1 - 255
            if (IPV4[i] >= 1 && IPV4[i] <= 255) {
                overnum = true
            } else {
                overnum = false
                break
            }


        }

        //Check number less 1 and number more 255 
        if (overnum) {
            return (true)
        } else return (false)

    }


}


//RUN
console.log(isValidIP("1.0.3.4"))
console.log(isValidIP("1.2.3"))
console.log(isValidIP("1.2.3.4.5"))
console.log(isValidIP("123.45.0.89"))
console.log(isValidIP("123.56.78.90"))
console.log(isValidIP("123.056.067.89"))