var testArr = [6,3,5,1,2,4];
var sum = 0;
for(var i=0; i<testArr.length; i++){
    sum += testArr[i]
    console.log("num " + testArr[i] + ", sum " + sum)
}

var newArr = [];
var value = 0;
for(var i=0; i<testArr.length; i++){
    value = testArr[i] * i
    newArr.push(value)
}
console.log(newArr)