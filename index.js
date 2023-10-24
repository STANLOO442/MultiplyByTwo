function sum(...n){
    let result = 0;
for (let i = 0; i < n.length ; i++){
    result += n[i]
}
return result
}

//console.log(sum(3,5,6,7,8))
 
//difference between rest and spread opertor
 function calculateMax(arr) {
let array = arr
    let max = Math.max(...array)
    return max
 }  
 //console.log(calculateMax(10, 20, 5, 15))
 //variable can be declared locally and globally


function multiplyByTwo(arr){
    let result = [arr[0] * 2]
    for(let i = 0; i < arr.length; i++){
     result.push(arr[i] * 2)
    }
    return result
}
console.log(multiplyByTwo([10,20,5,15,25]))