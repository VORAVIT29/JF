let furniture = ['Table', 'Chairs', 'Couch']

/* Arrow Funtion */
const SplitStr = (arry1) => {
    let i = 0
    for (let out of arry1) {
        console.log(arry1[i])
        for (out of arry1[i]) {
            console.log(out)
        }
        i++
    }
};

/* RUN */
SplitStr(furniture)