for(var i=0; i <= 225; i++){
console.log(i);
}

for(var i=0; i <= 1000; i+=2){
    console.log(i);
    }

for(var i=1; i <= 5000; i+=2){
    console.log(i);
    }

Arr1=[1,2,5]
sum = 0
for(var i=0; i<Arr1.length; i++){
    sum = Arr1[i] + sum
}
console.log(sum)

Arr1=[1,2,5,1]
sum = 0
for(var i=0; i<Arr1.length; i++){
    if(Arr1[i]>sum){
        sum = Arr1[i]
    }
    else{
        sum = sum;
    }
}
console.log(sum)
//finds highest number

Arr1=[1,2,5]
sum = 0
for(var i=0; i<Arr1.length; i++){
    sum = Arr1[i] + sum
}
sum = sum / Arr1.length
console.log(sum)
//find the average

array50 = []
for(i=1; i<=50; i+=2){
    array50.push(i)
}
console.log(array50)
//puts only odd numbers in this array

arrayY = [1,3,5,9]
var y = 4;
bigArray=[]
for(i=0; i<arrayY.length; i++){
    if(arrayY[i]>y){
        bigArray.push(arrayY[i])
    }
    else{
        y = y
    }
}
console.log(bigArray)
//selects numbers that go over a certain value and puts them into an array

squaringArrays = [2,5,8,12]
for(i=0; i < squaringArrays.length; i++){
    squaringArrays[i] = squaringArrays[i] * squaringArrays[i]
}
console.log(squaringArrays)
//squares the array and replaces the number

noNegativeArray = [-1,-8,9,5,-7]
for(i=0; i<noNegativeArray.length; i++){
    if(noNegativeArray[i]< 0){
        noNegativeArray[i] = 0
    }
    else{
        noNegativeArray[i] = noNegativeArray[i]
    }
}
console.log(noNegativeArray)

max = 0;
min = 100;
average = 0;
betterArray = []
theNumbersArr = [10, 5, 7, 2, 12]
for(i=0; i < theNumbersArr.length; i++){
    if(theNumbersArr[i]>max){
        max = theNumbersArr[i];
    }
    if(theNumbersArr[i]<min){
        min = theNumbersArr[i];
    }
    average = theNumbersArr[i] + average;
}
average = average / theNumbersArr.length;
betterArray.push(average);
betterArray.push(min);
betterArray.push(max);
console.log(betterArray);

randomArray = [2,5,7,8,10]
randomArray = randomArray.sort(()=> Math.random() - 0.5)
console.log(randomArray)

stringArray = [2,-5,8,-9,-7]
for(i=0;i<stringArray.length; i++){
    if(stringArray[i] < 0){
        stringArray[i] = "Dojo"
    }
}
console.log(stringArray)


function FindingDups(array){
    for(i = 0; i < array.length; i++){
        for(j  = 0; j < array.length; i++){
            if(array[i] = array[j]){
                console.log(i)
            }
        }
    }
}
FindingDups([3,5,6,4,5])