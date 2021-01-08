var arr = [5,-5,47]
var arr2 = []

var min = max = arr[0]

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
    
 if(arr[i] < min){
     min = arr[i]
 }  
 if(arr[i] > max){
    max = arr[i]
}
}
arr2.push(min)
arr2.push(max)
console.log(arr2)
