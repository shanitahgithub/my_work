// Array Iteration
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt += value + "<br>";
}
console.log(txt)
// The string '45<br>4<br>9<br>16<br>25<br>' represents a sequence of numbers 
// separated by <br> tags.
// So, the output '45<br>4<br>9<br>16<br>25<br>' is the result of 
// concatenating each number from the numbers array with <br> tags, creating a string that represents the numbers with HTML line breaks between them.


// Array map and flatMap
// map()
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value * 2;
}

console.log(numbers2); // Output the result of the map operation

// flatMap
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr)

// JavaScript Array filter()
const number = [45, 4, 9, 16, 25];
const over18 = number.filter(myFunction);
function myFunction(value, index, array) { return value > 18; }
console.log(over18)

// JavaScript Array reduce()
const numbe = [45, 4, 9, 16, 25];
let sum = numbe.reduce(myFunction);
function myFunction(total, value, index, array) { return total + value; }
console.log(sum)

// JavaScript Array every()
const num = [45, 4, 9, 16, 25];
let allOver18 = num.every(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18)

// JavaScript Array some()
const umbers = [45, 4, 9, 16, 25];
let someOver18 = umbers.some(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18)





// JavaScript Array keys()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = ""; // Initializing the text variable
const keys = fruits.keys();
for (let x of keys) { text += x + "<br>";}
console.log(text)



