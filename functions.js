const printhelloworld = function (){
    console.log ("hello");
    console.log ("world");
};
printhelloworld();


// 2nd method
function printhelloworld2() {
    console.log("hello");
    console.log("world 2");
}
printhelloworld2();

//3rd methid to creat a function ( => arrow notation)
const printhelloworld3 = () => {
    console.log ("printhelloworld3() called");
}; 
printhelloworld3();

/*********** */
// function with parameter

function printhelloworld4(name) {
    console.log("hello, " + name);
}// scope note: the variable name no longer exist when the function completes

printhelloworld4("me");

//function with multiple perameters
function printhelloworld5(name1, name2, name3, name4, name5){
    console.log(`hello, ${name1}, ${name2}, ${name3},${name4}, and ${name5}`); // string interpolation example
}
printhelloworld5("Matthew","william","adam","rosa","alvaro");
// string output
let someVeraiable="test"
console.log('hello, '+ someVeraiable);
console.log("hello, "+ someVeraiable);
console.log(`hello, ${someVeraiable}`);

/********************* */
//function calling a function
function printhelloworld6(){
    console.log("this is printhelloworld6()");
}

function printhelloworld7(){
    console.log("this is printhello7()");
   
}
printhelloworld6();
printhelloworld7();

//recursion
const factorial = n =>{
    if ( n <= 1){
        return 1;
    }

return n * factorial(n-1);// recursive call
};
console.log(factorial(5));

//************ */
// no return values vs return values functions

//function without a return value 
function sum( num1, num2){
console.log(num1 + num2);
}

//function with a return value 
function differance(num1, num2){
return num1, num2;// returning the differance between num 1 and  num2 but it
}
sum(2,10);
let addtentodifferance= differance(10, 5)+ 10;
console.log(addtentodifferance);


let name="rosa"; // this variable is available in the entire program
if(name =="rosa"){
    name="ovalle";
    let hello = "hello there!";
    console.log(hello);
    
}console.log(hello);