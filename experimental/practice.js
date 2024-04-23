function chai(chaiName) {
    this._chaiName = chaiName

    Object.defineProperty(this, "chaiName", {
        get: function() {
            return this._chaiName.toUpperCase()
        },
        set: function(value) {
            this._chaiName = value
        }
    })
}

const chai1 = new chai("myChai")

console.log(chai1.chaiName)