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

console.log(raj.encryptPassword())

// behind the scene

