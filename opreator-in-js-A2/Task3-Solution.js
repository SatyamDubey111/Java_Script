/*
Nested ternary operator in java script -> 

A nested ternary operator in java script allow us to check multiple conditional checks in a single statement. here's how you can use a nested ternary operator to check whether a number is positive, negative or zero. 

-> the nested operator is a concise way to handle multiple conditions in a single statement. In this example ,it is used to check whether a number is positive, negative or zero. and print the appropriate message .This approach improves code readability and reduce the need of multiple   if-else statement .

*/

//  syntax for ternary operator in java script -> 

condition1 ? expressionIfTrue1 : (condition2 ? expressionIfTrue2 : expressionIfFalse2);

// example ->

function checkNumber(num) {
    let result = (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
    console.log(`The number ${num} is ${result}.`);
}


checkNumber(5);   
checkNumber(-3);
checkNumber(0);   

