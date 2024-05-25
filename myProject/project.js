const data = document.querySelectorAll("button")
const sound = {
    "thounder": new Audio('music/thounder.mp3'),
    "thounder2": new Audio("music/thounder2.mp3"),
    "rain": new Audio("music/rain.mp3"),
    "wind": new Audio("music/wind.mp3")
}
let Off = true
let nowplaying = []
let song = {
    "thunder": false,
    "rain": false,
    "wind": false
}

data.forEach((e) =>{
    e.addEventListener("click", () =>{
        if(e.innerHTML == "thunder" && Off){
            sound["thounder"].play()
            sound["thounder2"].play()
            sound["thounder"].loop = true
            sound["thounder2"].loop = true
            nowplaying.push(sound["thounder"])
            nowplaying.push(sound["thounder2"])
            Off = false      
        }else if((e.innerHTML == "pause" || e.innerHTML == "play") && nowplaying.length){
            if(Off){
                for(audio of nowplaying) audio.play()
                e.innerHTML = "pause"
                Off = false
            }else{
                for(audio of nowplaying) audio.pause()
                e.innerHTML = "play"
                Off = true
            }
        }else if(e.innerHTML == "rain"){
            sound["rain"].play()
            nowplaying.push(sound["rain"])
            Off = false
        }else if(e.innerHTML == "wind"){
            sound["wind"].play()
            sound["thounder2"].play()
            sound["thounder2"].loop = true
            nowplaying.push(sound["wind"])
            nowplaying.push(sound["thounder2"])
            Off = false
        }
    })
    
})



