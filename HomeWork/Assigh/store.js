function getPrices(arr_price) {
    let new_arr = []

    for (const str of arr_price) {
        //กำหนดให้มีตัวเลข (0 - 9) และ มีจุด ถามี(ไปเก็บไว้ในตัวแปรใหม่) ถ้าไม่มี(ก็ไม่เก็บ)
        let keep_pri = str.toString().match(/[.0-9]/gi)
            //ใช้ join() เพื่อรวมตัวแปร และแปลงเป็น เลขทศนิยม
        new_arr.push(parseFloat(keep_pri.join('')))
    }

    return new_arr

}
console.log(getPrices(['ice cream ($5.99)', 'banana ($0.20)', 'sandwich ($8.50)', 'soup ($1.99)']))
console.log(getPrices(['salad ($4.99)']))
console.log(getPrices(['artichokes ($1.99)', 'rotiserrie chicken ($5.99)', 'gum ($0.75)']))
console.log(getPrices(['pizza ($2.99)', 'shampoo ($15.75)', 'trash bags ($15.00)']))