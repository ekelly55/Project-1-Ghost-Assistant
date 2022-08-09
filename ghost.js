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
interval = ""
ticks = 0

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
        console.log("yum")
        /*
        if(this.health !== 100) {
            this.health === this.health + 10
        } else {
            message.innerText = `Lord Halloween is full and content. He doesn't want any candy right now`
        }
        */
    }   
    scare() {
        console.log("boo")
        /*
        if(this.power !== 100) {
            this.power = 1000
            this.message.innerText = `You have stopped ${this.threat}. Lord Halloween's power is ${this.power}`
        }
        */
    }

    runThreat() {
        console.log("threat incoming!")
        /*
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
        */
    }
   
    winOrLose() {
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
    console.log("age goiing up, health going down")
    /*
    this.age = this.age + 1
    this.health = this.health - 1
    */
}

clearMessage () {
    this.message.innerText = ""
}

gameTimer() {
    console.log("time is ticking")
    //ticks++
    /*
    if(ticks%1 === 0) {
        this.ageAndHealth()
    } if(ticks%5 === 0) {
        this.runThreat()
    }
    */
}



//this works to run diff code at diff increments of time. but i can't run the identical functions
start() {
    ticks++
    //console.log(interval)
    if(ticks%2 === 0) {
        console.log("age increasing, health decreasing")
    } 
    if(ticks%5 === 0) {
        //console.log("threat detected")
    } 
} 
}

const gameLevelOne = new Game(1)

console.log(gameLevelOne.candy())

startButton.addEventListener("click", function () {
    gameLevelOne.interval = setInterval(gameLevelOne.start, 1000)
})

//clearInterval(gameLevelOne.interval)

candyButton.addEventListener("click", gameLevelOne.candy)

scareButton.addEventListener("click", gameLevelOne.scare)



//WHAT'S GOING WELL: got the interval to start running on click, the interval then invokes the start function. I can put all my code for each function inside the start function and it works, which will be a temporary workarouund. do a commit now. 

//todo tomorrow: figure out why my functions won't run (variables undefined)

//figure out how to stop the time when the game ends. can do a game state variable. if active, run time...but still requires figuring out how to stop time. 

//oooh i could count down from the total time to win! to do that, set ticks to the total time to start, then decrement it in your timer. 

//create event listeners for the three buttons

//create global ticks var set at 0, include ticks incrementer in your timer variable, then set the timing of diff functions by a conditional dependent on the ticks. do i need a while loop? the while loop is accessing the initial value of ticks immediately (0) and running infinitely. 

//can use timeOut for delaying a game intro screen. or to do an animation bringing the ghost in or something

//make a function to change the pumpkin on an interval

//and maybe an animation one to make the pumpkin jump or something on an interval. 