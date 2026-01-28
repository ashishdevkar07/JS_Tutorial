//Introduction
// console.log("Hello World") //To text on webage
// console.log("I love you")
// window.alert("This is alert") //This is used to pop up some message on your page
// window.alert("Yokoso")
// document.getElementById("first").textContent = "Hello" ;
// document.getElementById("second").textContent = "Ashish" ;





//Variables
/*
variables are containers that stores the value , it bheaves like it contains some data
1. declaration :- let x ;
2. assignment :- x = 100 ;
*/
// let x =100 ;
// console.log(x);
// let age= 19 ;
// console.log(age);
// //String 
// let firstname = "Ashish";
// console.log(`My first name is ${firstname}`) ;
// console.log(`you are ${age} years old`) ; 
// //Boolean
// let online = true ;
// console.log(typeof online) ;
// console.log(`Is bro online ? : ${online}`); 





//Small Example 
// let fullname = "Ashish Devkar" ;
// let age = 19 ;
// let Degree = "Yes"; 
// document.getElementById("p1").textContent = `My Name is : ${fullname}` ;
// document.getElementById("p2").textContent = `I am ${age} years old` ;
// document.getElementById("p3").textContent = `Doing BCA : ${Degree}`;





//Operators
/*
arithmetic operators = operands (values , variables , etc.) 
            operators (+ - * /)
            ex. 11 = x + 5 ;
*/
//let students = 31 ;
//students = students + 1 ;
//students = students - 1 ;
//students = students * 2 ;
//students = students / 3 ;
//students = students **2 ; //Exponent operator
//students = students % 3 ;
//console.log(students) ;
/*
operator precedence
1. parenthesis {}
2. exponents
3. multiplication & division & moduelo 
4. addition & subtraction 
*/
// let result = 1+2+10-12*6/4**3;
// console.log(result);





//How to accept user input 
/*
1. Simple way = window prompt
2. Professional way =  html textbox
*/
//Easy Way :- 
// let username ;
// username = window.prompt("Whats your name ?") ;
// console.log(username);
//professional way :- 
// let username ;
// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("h1").textContent = `Hello ${username}`
// }





//Type Conversion :- 
/*
change the datatype of a value to another (strings , numbers , booleans)
*/
// let age = window.prompt("How old are you ?");
// age = Number(age);
// age +=1 ;
// console.log(age);
// let x = "Pizza" ;
// let y = "Pizza" ;
// let z = "Pizza" ;
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x);
// console.log(y);
// console.log(z);





//Const :- A variable that cannot be changed 
// const pi = 3.14 ;
// let radius ;
// let circumference ;
// radius = window.prompt("Enter the radius of a circle :") ;
// radius = Number(radius);
// circumference = 2 * pi * radius ;
// console.log(circumference);

//Calculating radius of circle on our page 
// const pi = 3.14 ;
// let radius ;
// let circumference ;
// document.getElementById("mybutton").onclick = function(){
//      radius = document.getElementById("myinput").value ;
//     radius = Number(radius);
//     circumference = 2 * pi * radius ;
//     document.getElementById("myh3").textContent = circumference + "cm";
// }





//Math :- built-in function obhect that provides a collection of properties and methods
let x = 3;
let y = 2;
let z =1;
z = Math.round(x);
z = Math.floor(x);
z = Math.ceil(x);
z = Math.trunc(x);
z = Math.pow(x);
z = Math.sqrt(x);
z = Math.log(x);
z = Math.sin(x);
z = Math.cos(x);
z = Math.tan(x);
z = Math.abs(x);
z = Math.sign(x);
let max = Math.max(x , y , z);
let min = Math.min(x , y , z);
console.log(min);
