function BiggieSize(array){
    for(i = 0; i < array.length; i++){
        if(array[i] > 0){
            array[i] = "big"
        }
    }
    console.log(array)
}
BiggieSize([-2,5,-7,8])

function PrintLowReturnHigh(array){
high = 0;
lowValue = 10
for(i=0; i < array.length; i++){
    if(array[i]>high){
        high = array[i];
    }
    if(array[i]<lowValue){
        lowValue = array[i];
    }
    }
    // lowArray.push(low)
    console.log(lowValue)
    return high
}
 console.log(PrintLowReturnHigh([7,9,2,5])) 

 function PrintOneReturnOne(array){
     odd = 0;
    secondToLast = 0;
    for(i=0; i<array.length-1; i++){
        secondToLast = array[i]
    }
    console.log(secondToLast)
    for(i=0; i<array.length; i++){
        if(array[i]%2!=0){
            odd = array[i]
            return odd
        }
    }
 }
 console.log(PrintOneReturnOne([3,5,7,8]))

function DoubleVision(array){
    multipliedArray = []
    multipliedVar = 0
     for(i=0;i<array.length;i++){
        multipliedVar = array[i] * 2  
        multipliedArray.push(multipliedVar)
    }
    console.log(array)
    console.log(multipliedArray)
}
DoubleVision([2,3,5,9])

function CountPositives(array){
    var pos = 0
    for(i=0;i<array.length;i++){
        if(array[i]>0){
            pos++
        } 
    }
    array.pop()
    array.push(pos)
    console.log(array)
}
CountPositives([3,-8,3,5,-6])

function EvensAndOdds(array){
    for(i=0;i<array.length;i++){
        //if()
    }
}
//im not too sure how to go about this :( 

function incrementTheSeconds(array){
    for(i=1;i<array.length;i+=2){
        array[i] = array[i] + 1
        console.log(array[i])
    }
    console.log(array)
}
incrementTheSeconds([3,5,9,4,5,8])

function PreviousLengths(array){
    for(var i=array.length - 1; i>0; i--){
        array[i] = array[i-1].length
    }
    console.log(array)
}
PreviousLengths(["Hello", "Dojo", "Coding"])

function AddSeven(array){
    NewArray = [];
    sumValue = 0;
    for(i=0; i<array.length;i++){
        sumValue = array[i] + 7
        NewArray.push(sumValue);
    }
    console.log(NewArray)
}
AddSeven([5,6,9,1])

function ReverseArray(array){
    for(i=0; i<array.length; i++){
        array[i] = array[array.length-1 - i]
    }
    console.log(array)
}
ReverseArray([3,8,4,6])
// this result is wrong, its getting [6,4,4,6]

function OutLookNegative(array){
    for(i = 0; i < array.length; i++){
        if(array[i] > 0){
            array[i] = array[i] * -1
        }
    }
    console.log(array)
}
OutLookNegative([3,8,-4,6])

function AlwaysHungry(array){
    var hungry = true
    for(var i = 0; i < array.length; i++){
        if(array[i] == "food"){
            console.log("YUMMY")
            hungry = false
        }
    
    if(hungry){
        console.log("IM HUNGRY")
    }
}
}
AlwaysHungry([1,2,3,"food",5,6,7])

function SwappTowardCenter(array){
    first = array[0]
    last = array[array.length - 1]
    for(i = 0; i < array.length; i++){
        if(array[0]){
            array[0] = last
        }
        if(array[array.length - 1])
        array[array.length - 1] = first
    }
    console.log(array)
}
SwappTowardCenter([3,6,7,4])

function ScaleTheArray(array, sumNum){
    for(i = 0; i < array.length; i++){
        array[i] = array[i] * sumNum
    }
    console.log(array)
}
ScaleTheArray([3,5,9,4], 5)