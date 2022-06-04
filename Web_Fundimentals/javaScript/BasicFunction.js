//1
function a(){
    return 35;
}
console.log(a())
//this will print 35

//2
function a(){
    return 4;
}
console.log(a()+a());
//this will return 8 by adding 4 + 4

//3
function a(b){
    return b;
}
console.log(a(2)+a(4));
//this will add 2 + 4 with a result of 6

//4
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
//This will print out 3 and then return 3 * 3 being 9

//5
function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
//this will only return 40 b/c the return is at the top

 //6
 function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// since 15 is more than 10 it will go to the else statement and return 4

//7
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// this will return a(3 * 10) being 30 and print out 10 3

//8
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//this will only print 3 then 4 because the function isnt being called

//9
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//this function will print 2,5,8,11

//10
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//so this would print 0 through 9 and then again but with 0 at the end because the return will be printed

//11
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//the function was never called so it wouldnt print anything

//12
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
//function was never called

//13
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
//function a was never called so it would just print the value 10

//14
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
// this will do the function first which print 15 then print the value z which is 10

//15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//this will print 15 once then return 15