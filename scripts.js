//Steps
//User picks a number num1
//User picks a single operator
//User picks another number num2
//User picks equals
//script calcs answer and displays everything on screen
//That's only 5 things to figure out


//Create a new function operate that takes an operator and 2 numbers and 
//then calls one of the above functions on the numbers.
//User picks a number num1
var p1 = prompt("Pick first number");
var p2 = prompt("Pick second number");

document.getElementById("add").addEventListener("click", myAddFunction);
document.getElementById("sub").addEventListener("click", mySubtractFunction);
document.getElementById("mult").addEventListener("click", myMultiplyFunction);
document.getElementById("divide").addEventListener("click", myDivideFunction);

//User picks a single operator
function myAddFunction(p1, p2) {
    return p1 + p2;
  }

//Sub function
function mySubtractFunction(p1, p2) {
    return p1 - p2;
  }

//Multiply function
function myMultiplyFunction(p1, p2) {
    return p1 * p2;
  }

//Divide function
function myDivideFunction(p1, p2) {
    return p1 / p2;
  }

//User picks another number num2

//User picks equals and displays answer on screen

//script calcs answer and displays everything on screen

