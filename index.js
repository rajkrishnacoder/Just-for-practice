const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.entries();
let text = "";
for (let x of keys) {
  text += `${x} \n`
}

console.log(text);
