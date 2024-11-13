// Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and loops with examples: 

//Ans:
//In programming, loops are structures that allow a set of instructions to be executed repeatedly until a certain condition is met. Loops help avoid repetitive code and make programs more efficient and easier to read. They are essential for tasks that require repetitive actions, such as iterating over arrays, processing data, or running actions a specific number of times.

// Why do we need -> 

// Imagine you want to print numbers from 1 to 10. Without loops, you would need to write 10 console.log statements. With loops, you can achieve this in just a few lines, making the code concise and reducing errors.

// for loop
// syntax :

// for (initialization; condition; increment/decrement) {
//     // Code goes here 
//   }

//   example :
// let n;
for (let n=0;n<=10;n++) {
    console.log(n);
}


// while: The while loop repeats as long as the given condition is true .
// syntax: 
// while (condition ) {code goes here }
// example: 
let i = 10;
while(i>=0)
{
    console.log(i);
    i--;
    // i = i-1;
}

// 3. do..whileLoop
/* A do while loops issimilar to the while loop , but it gurantees at least one execution of the code block, even if the condition is false   */ 

// syntax of do while loop 
/*
do {
// code executed here 

} while (condition)   */

// example:
 
let l = 1;
do {
    console.log(l);
    l++

} while (i<=5);


// 4. for...of loop
// the for...of loop iterates over elements of an iterable, such as an array or string. It's especially useful for working with arrays.

// for (element of iterable) {
//      Code to execute
//   }

// Example: 

const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output: apple banana cherry


// for...in Loop 
// The for..in loop iterates over the properties of an object.Its usefu; for acessing key-value pairs.

// Syntax:
// for (key in object) {
//      Code to execute
//   }

//Examples : 

const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output: name: John age: 30 city: New York

  
  
 
