const test = {
    myName: "rajkrishna"
}

const user = {
    age: 20,
    _email: "r@google.com",
    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value;
    }
}

Object.setPrototypeOf(user, test)

console.log(user.myName)

console.log(user.email)