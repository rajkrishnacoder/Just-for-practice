class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}rajkrishna`
    }
}

const raj = new User("chai", "raj@gmail.com", "123")

// console.log(raj.encryptPassword())

// behind the scene

function userDeatail(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

userDeatail.prototype.encryptPassword = function() {
    return `${this.password}rajkrishna`
}

const dip = new userDeatail("dip", "email", "234343")

console.log(dip.encryptPassword())



// practice
class allName {
    constructor(name, id) {
        this.name = name
        this.id = id
    }

    myName() {
        console.log(`${this.name}${this.id}`)
    }
}

const user = new allName("dip", 123)

user.myName() 