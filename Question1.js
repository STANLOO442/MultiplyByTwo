
function multiplyByTwo(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
     result.push(arr[i] * 2)
    }
    let firstElement = result.slice(0, 1)
    let finalResult = firstElement.concat(result)
    return finalResult
}
console.log(multiplyByTwo([10,20,5,15,25]))