// / This function is defined to calculate the square of numbers  from 1 to 10.
// //  It starts a for loop that iterates from 1 to 10 using the variable k.
// Inside the loop:
//  It calls the square() function with the current value of k.
//  It assigns the result of square(k) to the variable squared
// // It logs a message to the console indicating the square of the current number (k) and its result. 
// // This function takes a number (num) as an argument.
// It calculates and returns the square of the input number by 
// multiplying it by itself (num * num).
function square(num) {
    return num * num;
}
function squareNumbers() {
    for (let k = 1; k <= 10; k++) {
    let squared = square(k);
    console.log("The square of " + k + " is: " + squared);
}
}

squareNumbers();
// // Call the function to square numbers and display the result
// Reassignment: Variables declared with let can be reassigned new values, similar to variables declared with var.

// javascript