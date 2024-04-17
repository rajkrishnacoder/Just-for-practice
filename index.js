

const myObject = {
    name: "rajkrishna", 
    age: 20,
    village: "gokulpur",
    myFunc2: function() {
        console.log(`your age is ${this.age}`)
    }
}

myObject.myFunc = function() {
    console.log(`hello, ${this.name}`);
}
console.log(myObject.myFunc());
console.log(myObject.myFunc2())