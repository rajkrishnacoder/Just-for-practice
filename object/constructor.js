function user(username, login, isLogIn) {
    this.username = username;
    this.login = login;
    this.isLogIn = isLogIn

    return this
}

const userOne = new user('rajkrishna', 1, true)
const userTwo = new user('dip', 3, false)
console.log(userOne.constructor)
// console.log(userTwo);