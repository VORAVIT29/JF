function find_nemo(str) {
    str = str.split(' ')

    for (let i = 0; i < str.length; i++) {
        //Check Nemo 
        if ("Nemo" === str[i]) {
            let number = str.indexOf(str[i])
            return (`I found Nemo at ${number + 1 } !`)
        }
    }
    return ("I can't find Nemo :(")
}

//RUN
console.log(find_nemo("I am Ne mo Nemo !"))