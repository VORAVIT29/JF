//==========================================
//                  .concat()
// string
let string = "voravit"
let string2 = "Saenmo"

console.log(string.concat(string2));
// Run = voravitsaenmo

// arrays
let arry = [2, 4, 6]
let arry2 = [1, 3, 5]
let arry3 = [8, 9, 10]

console.log(arry.concat(arry2, arry3));
// Run = [2,4,6,1,3,5,8,9,10]
//==========================================

//==========================================
//                  .pop()
let arry = ['Hello', 'Voravit', 'Saenmo']
console.log(arry);
//['Hello', 'Voravit', 'Saenmo']

arry.pop()
console.log(arry);
//['Hello', 'Voravit']
//==========================================

//==========================================
//                 .shift()
let arry = ['Hello', 'Voravit', 'Saenmo']
console.log(arry);
//['Hello', 'Voravit', 'Saenmo']

arry.shift()
console.log(arry);
//['Voravit', 'Saenmo']
//==========================================

//==========================================
//                  .unshift
let arr = ['Voravit']
console.log(arr);
//['Voravit']

arr.unshift('Saenmo')
console.log(arr);
//['Saenmo','Voravit']

arr.unshift('15 year old', 'Thank You');
console.log(arr);
//['15 year old','Thank You','Saenmo','Voravit']
//==========================================

//==========================================
//                  .push()
let arr = [1, 2]

arr.push(3);
//[1,2,3]
arr.push(4, 5);
//[1,2,3,4,5]
//==========================================

//==========================================
//                  .slice()
let arr = [1, 2, 3, 4]

arr.slice(1);
//[2,3,4]
arr.slice(1, 2);
//[2]
//==========================================

//==========================================
//                  .splice()
//array.splite(start,deleteCount,replacemrnt)
let str = [1, 2, 3]

str.splice(1, 1, 99)
console.log(str);
//[1,99,3]

str.splice(1, 0, 59)
console.log(str);
//[1,59,99,3]
//==========================================

//==========================================
//                  forEach

let score = [1, 2, 3, 4]
score.forEach(out => {
    if (out % 2 == 0) {
        console.log(out, "= evan")
    } else {
        console.log(out, "= Odd")
    }
    console.log(out * 2);
    //RUN = 2,4,6,8 
});
//==========================================

//==========================================
//                  .some()
let a = [1, 2, 3]
console.log(a.some(and => and === 3));
//Run = true
console.log(a.some(and => and === 4));
//Run = false
//==========================================

//==========================================
//                  .map()
//Create new Array
let oldArr = [1, 2, 3, 4]

let Newarr = oldArr.map(old => old * 5)
console.log(Newarr);
//Run = [5,10,15,20]

let object = [{
        name: 'Voravit',
        age: 10
    },
    {
        name: 'Saenmo',
        age: 20
    }
]

let ageNew = object.map(sub => sub.age * 5)
console.log(ageNew);
//Run = [50,100]
//==========================================

//==========================================
//                  .filter()
let test = ['and', 'bear', 'cat', 'ann']
console.log(test.filter((show) => show.length == 4));
//Run = ['bear']
//ตรวจสอบความยาวของตำแหน่งว่ามีเท่าไหร่
//==========================================

//==========================================
//                  .reduce()
let s = [1, 1, 1, 1]
console.log(s.reduce((total, y) => total + y));
//Run = 4
//==========================================

//==========================================
//                   .every()
let a = [45, 5, 7, 8, 5, 48, 4, 458, 454]
console.log(a.every(x => x > 400));
//Run = false ค่าทุกตัวต้องมากกว่า 400
let s = ['cat', 'dog', 'bear', 'house']
console.log(s.every(x => x.length > 2));
// Run = true ค่าทุกตัวต้องมีความยาวมากกว่า 2 ตัว
//==========================================

//==========================================
//                  .split()
let a = 'Hello World'
console.log(a.split(' '));
//Run = ['Hello','World']
//==========================================

//==========================================
//                  .sort()
let a = [32, 45, 21, 13, 78, 25]
console.log(a.sort());
// Run = [ 13, 21, 25, 32, 45, 78 ]

//==========================================