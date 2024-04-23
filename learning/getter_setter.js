class User{
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}rajkrihna`
    }
    set password(value) {
        // this.password = value this not good way to set password
        this._password = value.toUpperCase()
    }

    original() {
        console.log(this.password)
    }
}

const hitesh  = new User("rajk@google.com" , "abc")

console.log(hitesh.password)
console.log(hitesh.email)