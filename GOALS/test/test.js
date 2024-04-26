function myFunction(p1, p2) {
  return p1 * p2;
}
console.log(myFunction(5, 2));

// Write a JavaScript function that reverses a number.
//  Example x = 32243;

function reverseNumber(num) {
  let reversed = 0;

  while (num !== 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reversed;
}

// Example usage:
const x = 32243;
const reversedX = reverseNumber(x);
console.log(reversedX); // Output: 34223

//Write a JavaScript function that checks whether a passed string is a palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Loop through half of the string
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    // Check if the characters at positions i and (length - i - 1) are not equal
    if (str[i] !== str[str.length - i - 1]) {
      return false; // If not equal, it's not a palindrome
    }
  }
  return true; // If the loop completes, it's a palindrome
}

// Example usage:
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("nurses run")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//Write a JavaScript function that generates all combinations of a string.Example string : 'dog' Expected Output : d, do, dog, o, og, g
function generateCombinations(str) {
  const combinations = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      combinations.push(str.slice(i, j));
    }
  }

  return combinations;
}

// Example usage:
const inputString = "dog";
const result = generateCombinations(inputString);
console.log(result); // Output: ["d", "do", "dog", "o", "og", "g"]

//Write a JavaScript function that returns a string that has letters in alphabetical order. Example string : 'webmaster' Expected Output : 'abeemrstw'
function sortString(str) {
  // Remove non-letter characters and convert the string to lowercase
  const cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Convert the cleaned string to an array of characters, sort them, then join them back into a string
  return cleanStr.split("").sort().join("");
}

// Example usage:
const inpuString = "webmaster";
const sortedString = sortString(inpuString);
console.log(sortedString); // Output: 'abeemrstw'

//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string. Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
function findLongestWord(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Initialize variables to store the longest word and its length
  let longestWord = "";
  let maxLength = 0;

  // Iterate through each word in the array
  for (let i = 0; i < words.length; i++) {
    // If the current word is longer than the current longest word, update the longest word and its length
    if (words[i].length > maxLength) {
      longestWord = words[i];
      maxLength = words[i].length;
    }
  }

  return longestWord;
}

// Example usage:
const nputString = "Web Development Tutorial";
const longestWord = findLongestWord(nputString);
console.log(longestWord); // Output: 'Development'

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case. Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function capitalizeWords(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Iterate through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Capitalize the first letter of each word and concatenate it with the rest of the word
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the array of words back into a single string
  return words.join(" ");
}

// Example usage:
const inputStrin = "the quick brown fox";
const capitalizedString = capitalizeWords(inputStrin);
console.log(capitalizedString); // Output: 'The Quick Brown Fox'

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
function countVowels(str) {
  // Define an array of vowels
  const vowels = ["a", "e", "i", "o", "u"];

  // Convert the string to lowercase
  str = str.toLowerCase();

  // Initialize a variable to count the number of vowels
  let vowelCount = 0;

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the current character is a vowel (excluding 'y')
    if (vowels.includes(str[i]) && str[i] !== "y") {
      vowelCount++;
    }
  }

  return vowelCount;
}

// Example usage:
const iputString = "The quick brown fox";
const numberOfVowels = countVowels(iputString);
console.log(numberOfVowels); // Output: 5

//Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
function isPrime(num, divisor = 2) {
  // Base cases: if num is less than 2, it's not prime
  if (num < 2) {
    return false;
  }

  // If divisor reaches the square root of num without finding any divisors, num is prime
  if (divisor > Math.sqrt(num)) {
    return true;
  }

  // If num is divisible by divisor, it's not prime
  if (num % divisor === 0) {
    return false;
  }

  // Recursively check for divisors starting from divisor + 1
  return isPrime(num, divisor + 1);
}

// Example usage:
const number = 17;
const resul = isPrime(number);
console.log(resul); // Output: true

// Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
  // Initialize an empty matrix
  const matrix = [];

  // Iterate through rows
  for (let i = 0; i < n; i++) {
    // Initialize an empty row
    const row = [];

    // Iterate through columns
    for (let j = 0; j < n; j++) {
      // If diagonal element (i.e., row index equals column index), set to 1, otherwise set to 0
      if (i === j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }

    // Push the row to the matrix
    matrix.push(row);
  }

  return matrix;
}

// Example usage:
const n = 3;
const identity = identityMatrix(n);
console.log(identity);

// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
function findSecondLowestAndGreatest(numbers) {
  // Sort the array in ascending order
  numbers.sort(function (a, b) {
    return a - b;
  });

  // Remove duplicates
  const uniqueNumbers = [...new Set(numbers)];

  // If array has less than 2 unique numbers, return error message
  if (uniqueNumbers.length < 2) {
    return "Array should have at least two unique numbers.";
  }

  // Return the second lowest and second greatest numbers
  return uniqueNumbers[1] + "," + uniqueNumbers[uniqueNumbers.length - 2];
}

// Example usage:
const sampleArray = [1, 2, 3, 4, 5];
const esult = findSecondLowestAndGreatest(sampleArray);
console.log(esult); // Output: 2,4
