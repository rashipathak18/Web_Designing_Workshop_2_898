//array data type
let numbers =[1,2,3,4,5];
console.log(numbers[0]);//1
console.log(numbers[1]);//2
console.log(numbers[2]);//3
console.log(numbers[3]);//4

//array with multiple data types
let mixedArray =[1,"hello", true , {name :"Alice"}[1,2,3],];
console.log(mixedArray[0]);//1
console.log(mixedArray[1]);//Hello
console.log(mixedArray[2]);//true
console.log(mixedArray[3]);//{name:"alice"}
console.log(mixedArray[4]);//[1,2,3]
//to find the length of array
console.log(numbers.length);

//normal function witrh no parameters
function greet() {
    console.log("hello,world!");
}
greet() ;

// normal function
function multiply(a,b){
    return a*b;

}
console.log(multiply(2,3)) ;

//function expression
let divide = function(a,b){
    return a/b ;

}; 
console.log(divide(10,2));//5
//normal function with expression
let add = function(a,b){
    return a+b;

};
console.log(add(5,7));//12

//arrow function with no parameters
let sayHi =() => console.log("Hi!");
sayHi();//Hi!

//arrow function with single parameters
let square = x => x * x ;
console.log(square(4));//16

//arrow function with one parameters
const greetUser = (name) => {
    console.log('Hello, ${name}!');
}
greetUser("Alice"); //Hello,Alice!