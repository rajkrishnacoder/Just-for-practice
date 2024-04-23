// function User(email, password) {
//     this._email = email
//     this._password = password

//     Object.defineProperty(this, "email", {
//         get: function() {
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     }) 
// }

// const chai = new User("chai@google.com", "123")

// console.log(chai.email)

// object_getter-setter.js

const User = {
    _email: "h@hc.com",
    _passsword: "abc",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    }
}
const tea = Object.create(User)
console.log(tea._email)
