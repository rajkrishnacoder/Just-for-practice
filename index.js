const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.flatMap(myFunction);

function myFunction(val) {
  return val * 2;
}
console.log(numbers2);