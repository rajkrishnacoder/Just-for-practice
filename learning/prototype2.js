let myFirst = "rajkrishna     "

String.prototype.trueLength = function() {
    console.log(this)
    console.log(`True length is: ${this.trim().length}`)
}

myFirst.trueLength()
// let's start
let myName = ["raj", "dip"]

let heroPower = {
    raj: "hammer",
    dip: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.dip}`)
    }
}

Object.prototype.hitesh = function() {
    console.log(`raj is present in all object`)
}

Array.prototype.hayHitesh = function() {
    console.log(`hitesh is back`)
}


// heroPower.hitesh()
myName.hayHitesh()
myName.hitesh()

// Inheritance*******************************************************

const user = {
    name: "chai",
    email: "google"
}

const Teacher = {
    makevideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssitgment: "js assigment", 
    fullTime: true,
    __prot__: TeachingSupport
}

Teacher.__proto__  = user
// console.log(Teacher.name)
console.log(Teacher)

// modernd syntext
Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport)
console.log(TeachingSupport.makevideos)