function multiply() {
    return num*5
}

multiply.power = 2

console.log(multiply.power)
console.log(multiply.prototype)

function creatUser(username, score) {
    this.username = username
    this.score = score
}