function Sigma(value){
    sum = 0
    for(i = 0; i <= value; i++){
        sum = i + sum;
    }
    console.log(sum)
}
Sigma(5)

function Factorial(value){
    sum = 1
    for(i = 1; i <= value; i++){
        sum = i * sum;
    }
    console.log(sum)
}
Factorial(5)

function Fibonacci(value){
    sum1 = 0;
    sum2 = 0;
    fibSum = 0;
    for(i = 0; i <= value; i++){
        if(i = value-=2){
            sum1 = i;
        }
        if(i = sum1-=2){
            sum2 = i
        }
    } 
    fibSum = sum1 + sum2;
    console.log(sum1) 
    console.log(sum2)
    console.log(fibSum)
}
Fibonacci(9)
//come back to this

function ArraySecondtoLast(array){
    for(i = 0; i < array.length; i++){
        if(i = array.length -1){
            console.log(array[i-1]) 
        }
        else{
            console.log(null);
        }
    }
}
ArraySecondtoLast([7,9,8,7])

function ArrayNthToLast(array, value){
    for(i = 0; i < array.length; i++){
        if(i = array.length - value){
            return array[i]
        }
        else{
            return "null"
        }
    }
}
console.log(ArrayNthToLast([2,4,3,8,7], 3))

function SecondLargest(array, total){
temp = 0;
total = array.length
for(i = 0; i < total; i++){
    for(j = i + 1; j < total; j++){
        if(array[i] > array[j]){
            temp = array[i];
            array[i] = a[j];
            a[j] = temp
        }
    }
}
return array[total - 2]
}
console.log(SecondLargest([3,4,5,6]))

function DoubleTrouble(array){
    temp = 0;
    total = array.length
    for(i = 0; i < total; i++){
        /*temp = array[i+1]
        array.push(array[i])
        array[i+1] = array[array.length - 1]*/

    }
    console.log(array)
}
DoubleTrouble([3,9,7,8])
//come back to this
