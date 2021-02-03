let i = 0 ,de = 15
let num = [],sr=""
let base = de
do {
    //de % 2 การหารเอาเศษ
    //Math.floor = แปลง float เป็น int 
    //.push = ใส่ข้อมูลไปใน aary

    num.push(Math.floor(de % 2))
    de = Math.floor(de / 2)
    i++
} while (de > 0)
for(let j= i-1 ; j >= 0; j-- ){
    sr += num[j]
}
console.log("Convert Base 10 to Base 2")
console.log("Base 10 = ",base)
console.log("Base 2 = ",Math.floor(sr))