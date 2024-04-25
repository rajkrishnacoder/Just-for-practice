class user{
    constructor(username, email, age) {
        this.username = username
        this.email = email
        this.age = age
    }

    get username() {
        return this._username.toUpperCase()
    }
    set username(value) {
        this._username = value
    }
    test() {
        console.log("hellow world")
    }
}

class myUser extends user{
    constructor(username, email, age, id) {
        super(username, email, age) 
        this.id = id
    }
    get id() {
        return typeof String(this._id)
    }
    set id(value) {
        this._id = value
    }

    get age() {
        return typeof Number(this._age)
    }
    set age(value) {
        this._age = value
    }
}

const user1 = new myUser("rajkrishna", "google.com" , "30", 123) 

user1.test()