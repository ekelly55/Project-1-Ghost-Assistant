
const message = document.getElementById("message-display")

const title = document.getElementById("game-title")

const healthDisplay = document.getElementById("health-display")

const powerDisplay = document.getElementById("power-display")

const ageDisplay = document.getElementById("age-display")

const startButton = document.getElementById("start-button")

const candyButton = document.getElementById("candy-button")

const scareButton = document.getElementById("scare-button")

const speedSwitch = document.getElementById("switch")
console.log(speedSwitch.checked)
const boo = document.getElementById("ghost-talk")

const yum = document.getElementById("yum")

const noThanks = document.getElementById("no-thanks")

let pumpkin = document.getElementById("pumpkin")

const pumpkinGroup = ["game-images/eye-pumpkin.png", "game-images/flame-pumpkin-resize.png", "game-images/hand-pumpkin-resize.png"]

let current = 0

message.innerText = "Welcome to Spooky Land! As a lowly novice ghost, your job is to attend to every need of Lord Halloween, benevolent ruler of Spooky Land. His magic spooky power sustains the Spirit of Halloween and keeps all of Spooky Land happy! Feed him candy to increase his health. Use the scare button to increase his power after threats to the Spirit of Halloween. Click start to play!"

healthDisplay.innerText = `Health: 100`

powerDisplay.innerText = `Power: 100`

ageDisplay.innerText = `Age: 3000000000 years old.`

startButton.innerText = "Start"

candyButton.innerText = "Candy"

scareButton.innerText = "Scare"

interval = ""

ticks = 0



const game = {
    
    assistantLevel: 1,

    health: 100,

    age: 3000000000,

    power: 100,

    candyLevel: 100,

    threat: "",

    threatList: ["Timmy's Mom", "Timmy's Principal", "Santa"],

    
    candy: function() {

        if(game.health > 0 && game.power > 0 && game.age < 3000000049)  {

            if(game.health < 100 && game.health > 90) {

                game.health = 100
                yum.style.opacity = 1

            } else if(game.health < 100) {

                game.health = game.health + 10
                noThanks.style.opacity = 0
                yum.style.opacity = 1

            } else {

                yum.style.opacity = 0
                noThanks.style.opacity = 1
                message.innerText = `Lord Halloween is full and content. He doesn't want any candy right now`

            }

            healthDisplay.innerText = `Health: ${game.health}`

        }

    },
    

    scare: function() {

        if(game.power > 0 && game.health > 0 && game.age < 3000000049) {

            if(game.power < 100 && game.power > 90) {

                game.power = 100

            } else if(game.power < 100){

                game.power = game.power + 10

            }

            boo.style.opacity = 1;

            powerDisplay.innerText = `Power: ${game.power}`

            message.innerText = `You have stopped ${game.threat}. Lord Halloween's power is ${ game.power}`

        }

    },


    runThreat: function () {

        if(game.power > 0 && game.health > 0 && game.age < 3000000049){  

            game.threat = game.threatList[Math.floor(Math.random()*game.threatList.length)]

            if(game.threat === "Timmy's Mom") {

            message.innerText =`Timmy's Mom hates Halloween! She won't let Timmy decorate the house! Her attitude is threatening the spirit of Halloween for Timmy, and Lord Halloween is losing power! 
            Scare Timmy's Mom to counter the threat and restore Lord Halloween's power!`
            game.power = game.power - 30    
            
            } else if(game.threat === "Timmy's Principal") {
            
            message.innerText =`Timmy's Principal hates when kids have fun at school! They won't let the students wear costumes or have a party! Their attitude is threatening the spirit of Halloween for all the students, and Lord Halloween is losing power! Scare Timmy's Principal to counter the threat and restore Lord Halloween's power!`                
            game.power = game.power - 50
          
            } else if(game.threat === "Santa") {
        
            message.innerText = `The War on Halloween has begun! Stores are already selling Christmas decorations and playing All I Want For Christmas! Santa is threatening the spirit of Halloween for
            all everyone, and Lord Halloween is losing power! Scare Santa to counter the threat and restore Lord Halloween's power!`
            game.power =  game.power - 70                
    
            } if(game.power < 0) {
        
            game.power = 0
    
            }
        
        powerDisplay.innerText = `Power: ${game.power}`
    
        }

    },
    
    
    winOrLose: function() {

        if(game.health === 0) {

            message.innerText = `Game Over! The spirit of Halloween is fading away. Soon it will just be Christmas and tests all year long`
            clearInterval(interval);

            } else if(game.power <= 0) {

            clearInterval(interval)
            message.innerText = `Game Over! The spirit of Halloween is fading away. Soon it will just be Christmas and tests all year long`
    
            } else if(game.age === 3000000049) {
        
            message.innerText = `You win! Lord Halloween has reached the ripe old age of ${game.age+1}! You have sustained the spirit of Halloween for ${game.age - 2999999999} years! Click the start button to play again.`    
            clearInterval(interval)
        }
    }, 
    

    ageAndHealth: function () {
    
        game.age =  game.age + 1
    
        game.health =  game.health - 10
    
        if(game.health < 0) {
    
            game.health = 0
    
        }
    
        ageDisplay.innerText = `Age: ${game.age} years old.`
    
        healthDisplay.innerText = `Health: ${game.health}`
    
    },
    

    pumpkinSelect: function () {
        
        if(current === 2){
            current = 0
        } else {

            current++
        }
        let currentPumpkin = pumpkinGroup[current] 
        console.log(currentPumpkin)
        pumpkin.src = currentPumpkin

    },

    gameTimer: function() {
    
        game.winOrLose()
    
        ticks++
    
        boo.style.opacity = 0;
    
        yum.style.opacity = 0;
    
        noThanks.style.opacity = 1

        if(speedSwitch.checked = true){
            
            
            if(ticks%1 === 0) {
                
                game.ageAndHealth()
                
            } 
            if(ticks%5 === 0) {
                
                game.runThreat()
                
            } 
            if(ticks%5 === 0){
                
                game.pumpkinSelect()
            }
        } else {
            if(ticks%2 === 0) {
                
                game.ageAndHealth()
                
            } 
            if(ticks%10 === 0) {
                
                game.runThreat()
                
            } 
            if(ticks%10 === 0){
                
                game.pumpkinSelect()
            }
        }
            
    },
  

    start: function() {
    
        game.gameTimer()
    
    }, 

}


startButton.addEventListener("click", function () {

    interval = setInterval(game.start, 1000)

    })


candyButton.addEventListener("click", game.candy)


scareButton.addEventListener("click", game.scare)
