function splitStringIntoWords(str) {
    
    let array = str.split(" ");
    return array;
}
let string = "I am a student at WITI";
let words = splitStringIntoWords(string);
console.log(words);