
const text = "Please locate where 'locate' occurs!";
const index = text.indexOf("locate");
console.log(index)

let inde = text.lastIndexOf("locate");
console.log(inde)

// This  locates the index of the word needed
let tex = "The rain in SPAIN stays mainly in the plain";
console.log(tex.match("ain"));

// This 
let tet = "Please locate where 'locate' occurs!";
console.log(tet.search(/locate/));

// This makes a global search
let te = "The rain in SPAIN stays mainly in the plain";
console.log(te.match(/ain/g));

// let t = "I love cats. Cats are very easy to love. Cats are very popular."
 
// console.log(t.matchAll("Cats"));
let t = "I love cats. Cats are very easy to love. Cats are very popular.";

const regex = /Cats/g;
const matches = t.matchAll(regex);

for (const match of matches) {
  console.log(match);
}

let inc = "Hello world, welcome to the universe.";
console.log(inc.includes("world"));

// The startsWith() 
// It returns true if the word starts with the string
const example = "Hello world, welcome to the universe.";
console.log(example.startsWith("Hello"));

// Start at index 12
let startAt = "Hello world, welcome to the universe.";
console.log(startAt.includes("world", 12));

// Start at 0
console.log(startAt.includes("world",0));


const person=
`The quick
brown fox
jumps over
the lazy dog

`
console.log(person)

let firstName = "John";
let lastName = "Doe";
let result = `Welcome ${firstName}, ${lastName}!`;
console.log(result)


let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total)
// how to access info
// interpolation

const movie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    star: {
        name: "Puff",
        country: "Uganda",
        age: "45"
    }
};
console.log(`Puff the Magic Dragon lasts for 30 minutes. Star: Puff is 45 years old and born in Uganda`);

const self= {
    cohort: 3,
    
    profile: {
        name: "Shanitah",
        country: "Uganda",
        age: "22"
    }
};
console.log(`Shanitah is 22 years old from Uganda. And is in cohort 3`);
result=` ${self.profile.name} is , ${self.profile.age} years old from ${self.profile.country}. And is in cohort ${self.cohort}!`
console.log(result)

// How  
let x = 9.656;
console.log(x.toFixed(0));
console.log(x.toFixed(2)); 
console.log(x.toFixed(4)); 
x.toFixed(6);
