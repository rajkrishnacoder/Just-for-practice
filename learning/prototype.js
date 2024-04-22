function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increament = function() {
    this.score++
    console.log(this.score)
}

createUser.prototype.printMe = function() {
    console.log(`this is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
tea.increament() 