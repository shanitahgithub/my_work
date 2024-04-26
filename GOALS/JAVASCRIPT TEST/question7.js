function swapCase(str) {
    let swapped = '';
    for (let k = 0; k < str.length; k++) {
        let char = str.charAt(k);
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}
let String = "hElLo";
let result = swapCase(String);
console.log(result); 