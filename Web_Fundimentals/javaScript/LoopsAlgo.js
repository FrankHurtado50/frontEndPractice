for(var num = 1; num  <= 20; num +=2){
    console.log(num);
}

function AlgoLoop(array){
    sum = 0;
    for(i = 0; i < array.length; i++){
        sum = array[i] + sum;
        array[i] = sum
    }
    console.log(array)
}
AlgoLoop([1,2,3,4,5])