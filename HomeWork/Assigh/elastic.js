function elasticize(world) {
    let left = ''
    let center = ''
    let rigth = ''
    world = world.split('')

    if (world.length == 1 || world.length == 2) {
        return world.join('')
    }

    if (world.length % 2 == 1) { //ต้องเป็นจำนวนหารไม่ลงตัว

        let mid = world[parseInt(world.length / 2)]
        let index = world.indexOf(mid)

        for (let i = 0; i <= index; i++) {
            center += mid
        }

        world.splice(index, 1)
    }

    for (let i = 0; i < world.length / 2; i++) { //left เก็บตัวอักษรทางซ้าย
        for (let j = 0; j <= i; j++) {
            left += world[i]
        }
    }

    for (let i = world.length / 2; i < world.length; i++) { //rigth เก็บตัวอักษรทางฝั่งขวา
        let count = world.length - i
        for (let j = count; j > 0; j--) { //การลดค่าของตัวอักษร
            rigth += world[i]
        }
    }
    return left.concat(center, rigth)
}

//RUN
console.log(elasticize("ANNA"))
console.log(elasticize("X"))
console.log(elasticize("KAYAK"))
console.log(elasticize("AA"))
console.log(elasticize("ABC"))
console.log(elasticize("BOB"))
console.log(elasticize("OTTO"))
console.log(elasticize("LEVEL"))
console.log(elasticize("IJKCBA"))
console.log(elasticize("REDDER"))
console.log(elasticize("ROTATOR"))