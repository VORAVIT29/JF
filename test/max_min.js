let arr = [5,-5,47]
let arr2 = []

let min = max = arr[0]
console.log(arr)
for(let i = 0 ; i < arr.length ; i++ ) {
    //console.log(arr[i])
    
 if(arr[i] < min){
     min = arr[i]
 }  
 if(arr[i] > max){
    max = arr[i]
}
}
/*arr2.push(min)
arr2.push(max)*/
console.log("Min",min)
console.log("Max",max)
