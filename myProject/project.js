const data = document.querySelectorAll("button")
const sound = {
    "thounder": new Audio('music/thounder.mp3'),
    "thounder2": new Audio("music/thounder2.mp3"),
    "rain": "hl"
}
let Off = true
let nowplaying = []

data.forEach((e) =>{
    e.addEventListener("click", () =>{
        if(e.innerHTML == "thunder" && Off){
            sound["thounder"].play()
            sound["thounder2"].play()
            sound["thounder"].loop = true
            nowplaying.push(sound["thounder"])
            nowplaying.push(sound["thounder2"])
            Off = false
        }else if(e.innerHTML == "pause"){
            for(audio of nowplaying){
                audio.pause()
            }
            nowplaying.length = 0
            Off = true
        }
    })
    
})



