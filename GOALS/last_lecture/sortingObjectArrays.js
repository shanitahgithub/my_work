// Ascending
const cars = [{type:"Volvo", year:2016}, {type:"Saab", year:2001}, {type:"BMW", year:2010}];
cars.sort(function(a, b){return a.year - b.year}); // sorting by year
console.log(cars)

// Descending
const car = [{type:"Volvo", year:2016}, {type:"Saab", year:2001}, {type:"BMW", year:2010}];
car.sort(function(a, b){return b.year - a.year}); // sorting by year
console.log(car)



// ars.sort(function(a, b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   });
// const ars = [{type:"Volvo", year:2016}, {type:"Saab", year:2001}, {type:"BMW", year:2010}];
// console.log(ars) 