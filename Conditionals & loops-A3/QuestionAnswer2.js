/* Q2. Write a program that grades students based on their marks.
. If greater than 90 than A Grade
. If between 70 and 90 then a B grade
. If between 50 and 70 then a C grade
. Below 50 then an F grade  */


// solution:

let grade = 75;
if(grade>90) {
    console.log(" A Grade");
}else if(grade>=70 && grade<=90) {
    console.log(" B Grade");
}else if(grade>=50 && grade<=70) {
    console.log(" C Grade ");
}else if(grade<50) {
    console.log(" F grade ");
}