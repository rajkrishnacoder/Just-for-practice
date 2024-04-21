function  setUsename(username) {
    this.username = username
    console.log("called")
}

function creatUser(username, email, password) {
    setUsename.call(this, username)

    this.email = email
    this.password = password
}

const rajk = new creatUser("rajk", "no@gogle.com", "123")
console.log(rajk)

