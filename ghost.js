console.log("js loaded")

//DOM variables
const message = document.getElementById("message-display")
const title = document.getElementById("game-title")
const healthDisplay = document.getElementById("health-display")
const powerDisplay = document.getElementById("power-display")
const ageDisplay = document.getElementById("age-display")
const startButton = document.getElementById("start-button")
const candyButton = document.getElementById("candy-button")
const scareButton = document.getElementById("scare-button")


message.innerText = "testing"
healthDisplay.innerText = "Health: 100"
powerDisplay.innerText = "Power: 100"
ageDisplay.innerText = "Age: 3000000000 Years Old"
startButton.innerText = "Start"
candyButton.innerText = "Candy"
scareButton.innerText = "Scare"
/*
setInterval function: use to run the threat function. how to start time when start clicked? if that's the case, do all the functions have to be nested inside the start function?
*/
//console.log(startButton)
//data in the game object: health, age, power, candy, assistant level, candy method, scare method, threat method. no age. going to use a timer. 

class Game {
    constructor(assistantLevel) {
        this.assistantLevel = assistantLevel
        this.health = 100;
        this.age = 3000000000;
        this.power = 100;
        this.candyLevel = 100;
        this.threat = ""
        this.threatList = ["Timmy's Mom", "Timmy's Principal", "Santa"]
    }
    candy() {
        
        if(this.health !== 100) {
            this.health === this.health + 10
        } else {
            this.message.innerText = `Lord Halloween is full and content. He doesn't want any candy right now`
        }
    }
    scare() {
        
        if(this.power !== 100) {
            this.power = 1000
            this.message.innerText = `You have stopped ${this.threat}. Lord Halloween's power is ${this.power}`
        }
    }

    runThreat(threat) {
        this.threat = this.threatList[(Math.floor)(Math.random)(this.threat.length)]
        if(this.threat === "Timmy's Mom") {
        this.message.innerText =`Timmy's Mom hates Halloween! She won't let Timmy decorate the house! Her attitude is threatening the spirit of Halloween for Timmy, and Lord Halloween is losing power! Scare her to counter the threat and restore Lord Halloween's power!`
        this.power = this.power - 10    
        } else if(this.threat === "Timmy's Pincipal") {
        this.message.innerText = `Timmy's Principal hates when kids have fun at school! They won't let the students wear costumes or have a party! Their attitude is threatening the spirit of Halloween for all the students, and Lord Halloween is losing power! Scare them to counter the threat and restore Lord Halloween's power!`
        this.power = this.power - 20
        } else if(this.threat === "Santa") {
        this.message.innerText = `The War on Halloween has begun! Stores are already selling Christmas decorations and playing All I Want For Christmas! Santa is threatening the spirit of Halloween for all everyone, and Lord Halloween is losing power! Scare Santa to counter the threat and restore Lord Halloween's power!`
        this.power = this.power - 30
        }
    }
    /*

    timer: nest inside a the start funciton, which will run when start clicked. start already contains everything to start the game, check if the player has one or lost, and start incrementing age and decrementing health and run the threat funciton. but those will be on different timers, so I will need mulitiple setIntervals. can i put them within the start function?  yes. and you don't need to write out a massive function. declare them separately, like you did runThreat, then just put them in the setInterval parameters without parentheses
    setInterval(function () {
        
    } 1000);
    */
    
    winOrLose () {
        if(this.health === 0 || this.power === 0) {
        this.message.innerText = `Game Over! The spirit of Halloween is fading away. Soon it will just be Christmas and tests all year long`
        this.power = 100;
        this.age = 3000000000;
        this.health = 100;
        this.assistantLevel = 1;
        //stop game timer
        } else if(age === 3000000100) {
        this.message.innerText = `You win! Lord Halloween has reached the ripe old age of ${this.age}! You have sustained the spirit of Halloween for ${this.age - 3000000000} years! Click the start button to play again.`
        //stop game timer
        } 
    }
    ageAndHealth () {
        this.age = this.age + 1
        this.health = this.health - 1
        }

    clearMessage () {
        this.message.innerText = ""
        }
    
    start() {
        setInterval(function() {
            console.log(testing)
        }, 1000)
        setInterval(this.winOrLose, 1000)
        setInterval(this.ageAndHealth, 5000)
        setInterval(this.runThreat, 20000)
        setInterval(this.clearMessage, 10000)
    } 
   
}

const gameLevelOne = new Game(1)

//gameLevelOne.start()

console.log(gameLevelOne.clearMessage)

//todo tomorrow: figure out why my functions won't run (variables undefined)

//figure out how to stop the time when the game ends

//create event listeners for the three buttons