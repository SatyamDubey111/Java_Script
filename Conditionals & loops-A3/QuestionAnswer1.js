// Q1. What are conditional statements? Explain conditional statements with syntax and examples.

/* In java script , conditinal statemnets are used to perform different actions based on different conditions. They enable code to make decisions and execute particular sections based on weather a certain condition is met . here are the main types of conditional statements in javascript :

1. if statement 
2. if else 
3. if else if 
4. switch statement 
*/

// syntax of if statement 

if(condition){

}

// examples: 
let age = 20 ;
if(age>10)
{
    console.log("you are eligible to watch movie");

}

// syntax of if else statement 


if(condition){

}else {

}

// example :
 let month = 1;
 if(month == 1)
 {
    console.log("its january");
 }else {
    console.log("its not a january");
 }

 // Syntax of if else if 

 if(condition){

 } else if(condition2) {

 } else {

 }

 // example : 

 let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// syntax of switch statement 

switch(expression) {
    case value1:
        // code will be executed here 
        break;
    case value2:
        // code will be executed here 
        break;
    default:
        // code will be executed heree        

}
// Exmple :

let day = 5;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");  
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");        

}