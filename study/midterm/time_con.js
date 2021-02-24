function digitalClock(time) {

    //วิธี 1
    /*let hr = time / 3600
    hr = parseInt(hr)
    time = time - (hr * 3600)
    let Min = time / 60
    Min = parseInt(Min)
    time = time - (Min * 60)


    if (hr >= 24) {
        hr = '00';
    }
    if (Min < 10) {
        Min = '0' + Min
    }
    if (time < 10) {
        time = '0' + time
    }
    return (hr + ':' + Min + ':' + time)*/

    //วิธี 2
    let array = []
    while (true) {
        array.push(hr = parseInt(time / 3600))
        time = time - (hr * 3600)
        array.push(m = parseInt(time / 60))
        array.push(s = time - (m * 60))
        break
    }

    while (true) {
        if (array[0] >= 24) array[0] = '00'
        if (array[1] < 10) array[1] = '0' + m
        if (array[2] < 10) array[2] = '0' + s
        break
    }
    return (array.join(':'))
}


//RUN
console.log(digitalClock(5025))
console.log(digitalClock(61201))
console.log(digitalClock(87000))