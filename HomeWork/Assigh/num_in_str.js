function numInStr(num) {
    let num2 = []
    for (let i = 0; i < num.length; i++) {
        let stop = false
        for (let j = 0; j < num[i].length; j++) {
            //ใช้เช็คว่าตำแหน่งนั้นมีตัวเลขสักตัวไหม
            if (!isNaN(parseInt(num[i][j]))) {
                stop = true
                break
            }
        }
        if (stop) {
            num2.push(num[i])
        }
    }
    return num2
}

//RUN
console.log(numInStr(['1a', 'a', '2b', 'b']))
console.log(numInStr(['abc', 'abc10']))
console.log(numInStr(['abc', 'ab10c', 'a10bc', 'bcd']))
console.log(numInStr(['this is a test', 'test1']))
console.log(numInStr(['abc', 'ab10c', 'a10bc', 'bcd']))
console.log(numInStr(['1', 'a', ' ', 'b']))
console.log(numInStr(['rct', 'ABC', 'Test', 'xYz']))
console.log(numInStr(['this IS', '10xYZ', 'xy2K77', 'Z1K2W0', 'xYz']))
console.log(numInStr(['-/>', '10bc', 'abc ']))