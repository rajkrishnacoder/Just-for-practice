// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];

// cars.sort((a, b) => {
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) {return -1}
//     if (x > y) {return 1}
// });
// console.log(cars);
// let text = "The rain in SPAIN stays mainly in the plain";

// console.log(text.match(/ain/));
const numbers = [45, 4, 9, 16, 25];

let num = numbers.flatMap((x) =>  x * 2 )
console.log(num);