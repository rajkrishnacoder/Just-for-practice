const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {console.log('hello world'); resolve()}, 1000)
})

promiseOne.then(function() {

})

//practice two
// const promiseTow = new Promise(function(resolve, reject) {
//      setTimeout(function() {
//         resolve({username: "Chai", email: 'rajkrishna@gmail.com'})  
//      }, 1000)
// }).then(function(user) {

// })

// //pracice three
// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = false
//         if(!error) {
//             resolve({username: 'rajkrishna', password: '123'})
//         }else {
//             reject('ERROR: something went wrong')
//         }
//     }, 1000)
// })

// promiseThree.then((user) => {
//     console.log(user)
//     return user.username 
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log('everything is now done')
// })

// promise five

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: 'RAJKRISHNA', password: '123'})
        }else {
            reject('ERROR: Rajkrishna went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
