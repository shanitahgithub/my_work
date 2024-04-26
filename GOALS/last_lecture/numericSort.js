// Sorting an Array in ascending order
const point = [40, 100, 1, 5, 25, 10];
point.sort(function(a, b){return a - b});
console.log(point)

// Sorting an Array in descending order
const ponts = [40, 100, 1, 5, 25, 10];
ponts.sort(function(a, b){return b - a});
console.log(ponts)


// Sorting an Array in Random Order(Sorts numbers randomly)
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
console.log(points)

// Fisher Yates method
const numbers = [40, 100, 1, 5, 25, 10];
for (let i = numbers.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = numbers[i];
  numbers[i] = numbers[j];
  numbers[j] = k;
}
console.log(numbers)

// Using Math.min() on an Array
function myArrayMin() {
    return Math.min.apply(null, [1, 2, 3]);
}
  
console.log(myArrayMin());

// Using Math.max() on an Array
function myArrayMax() {
    return Math.max.apply(null, [1, 2, 3]);
}
  
console.log(myArrayMax());

// JavaScript Array Minimum and Max Method
function Min(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {  
            min = arr[len]; 
        }
    }
    return min;
}

let arr = [1, 2, 3]; // Defining the array before calling the function
console.log(Min(arr)); // Calling the function and logging the result

// // JavaScript Array Maximum Method
function Max(array) {
// We create two variables: len to store the length of the array, 
// and min to store the smallest value. We initialize min with Infinity,
//  which means it's set to a value larger than any other number.
    let len = array.length;   
    let max = -Infinity;
// This starts a loop that iterates through each element of the array, starting 
// from the last element and moving towards the first.
    while (len--) {
// For each element in the array, we check if it's smaller than the current smallest
// value (min). If it is, we update min to this smaller value.
      if (array[len] > max) {
        max = array[len];
      }
    }
// After looping through all elements,
// we return the smallest value found in the array.
    return max;
  }
let array = [1, 2, 3]; // Defining the array before calling the function
console.log(Max(array)); // Calling the function and logging the result
  