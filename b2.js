var i = 0 ,de = 15
var num = [],sr=""
do {
    //de % 2 การหารเอาเศษ
    //Math.floor = แปลง float เป็น int 
    //.push = ใส่ข้อมูลไปใน aary

    num.push(Math.floor(de % 2))
    de = Math.floor(de / 2)
    i++
} while (de > 0)
for(var j= i-1 ; j >= 0; j-- ){
    sr += num[j]
}
console.log(sr)