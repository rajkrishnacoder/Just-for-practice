const link = "https://api.github.com/users/hiteshchoudhary"

async function myApi() {
    try {
        const response = await fetch(link)
        const data = await response.json() 
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}

myApi()