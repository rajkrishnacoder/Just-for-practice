class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username is ${this.username}`)
    }

    static creatId() {
        return `123`
    }
}
 
class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`new course added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "email.com", "123")

chai.addCourse()
chai.logMe()
const tea = new User("rajkrishna")

tea.creatId()
