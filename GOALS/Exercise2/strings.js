// String substring(start, end)
let str = "Nakagga Shanitah";
let substr = str.substring(6, 6); 
console.log(substr )

// String substr(start, length)
let subst = str.substr(6, 5); 
console.log(subst )

// String replace()
let replacedStr = str.replace("Shanitah", "Ahmed"); // Returns "Nakagga Ahmed"
console.log(replacedStr )

// String replaceAll()
let replacedAllStr = str.replaceAll("a", "e"); 
console.log(replacedAllStr)

// String toUpperCase()
let upperCaseStr = str.toUpperCase(); // Returns "NAKAGGA SHANITAH"
console.log(upperCaseStr )

// String toLowerCase()
let lowerCaseStr = str.toLowerCase(); // Returns "nakagga shanitah"
console.log(lowerCaseStr )

// String concat()
let newStr = str.concat(" ", "How are you?"); // Returns "Nakagga Shanitah How are you?"
console.log(newStr )

// String trim()
let trimmedStr = "  Nakagga Shanitah  ".trim(); // Returns "Nakagga Shanitah"
console.log(trimmedStr )

// String trimStart()
let trimmedStartStr = "  Nakagga Shanitah".trimStart(); // Returns "Nakagga Shanitah"
console.log(trimmedStartStr )

// String trimEnd()
let trimmedEndStr = "Nakagga Shanitah ".trimEnd(); // Returns "Nakagga Shanitah"
console.log(trimmedEndStr)

// String padStart()
let paddedStartStr = "5".padStart(4, "0"); // Returns "0005"
console.log(paddedStartStr )

// String padEnd()
let paddedEndStr = "5".padEnd(4, "0"); // Returns "5000"
console.log(paddedEndStr )

// String charAt()
let char = str.charAt(0); // Returns "N"
console.log(char )

// String charCodeAt()
let charCode = str.charCodeAt(0); // Returns the Unicode value of "N"
console.log(charCode)

// String split()
let splittedStr = str.split(" "); // Returns ["Nakagga", "Shanitah"]
console.log(splittedStr )