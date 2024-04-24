function user(username) {
    this._username = username

    Object.defineProperty(this, 'username', {
        get: function() {
            return this._username.toUpperCase()
        },
        set: function(value) {
            this._username = value
        }
    })
}

const user1 = new user("rajkrishna") 

console.log(user1.username) 