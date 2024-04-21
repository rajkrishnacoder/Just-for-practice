

async function test() {
    try {
       const response = await fetch("https://api.github.com/users/hiteshchoudhary")
       const data = await response.json()
       console.log(data)
    } catch(error) {
        console.log(error)
    }
}

test()
// this is quite fun own if's own way in actually

