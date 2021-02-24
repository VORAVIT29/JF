function getBudgets(object) {

    let sumbedget = 0
    for (let i = 0; i < object.length; i++) {
        //console.log(object[i].budget)
        sumbedget += object[i].budget;
    }
    return (sumbedget)

}

//RUN
console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]))

console.log(getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]))