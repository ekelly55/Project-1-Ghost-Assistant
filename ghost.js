console.log("js loaded")


//DOM variables.
const message = document.getElementById("message-display")
const title = document.getElementById("game-title")
const healthDisplay = document.getElementById("health-display")
const powerDisplay = document.getElementById("power-display")
const ageDisplay = document.getElementById("age-display")
const startButton = document.getElementById("start-button")
const candyButton = document.getElementById("candy-button")
const scareButton = document.getElementById("scare-button")

message.innerText = "Welcome to Spooky Land! This is Lord Halloween, the benevolent ruler of Spooky Land. His magic spooky power sustains the Spirit of Halloween and keeps all of Spooky Land happy! As a lowly novice ghost, your job is to attend to Lord Halloween's needs. Feed him candy to increase his health. There are many threats to the Spirit of Halloween, which will decrease Lord Halloween's power. Use the scare button to increase his power again."
healthDisplay.innerText = `Health: 100`
powerDisplay.innerText = `Power: 100`
ageDisplay.innerText = `Age: 3000000000 years old.`
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
        //can't access these variables to redefine them. taking the same approach as with power returns undefined in the display. why can't the healthDisplay text access the new value of health?
        if(this.health !== 100) {
            this.health === 100
            this.health === this.health + 10
            message.innerText = "yum"
            healthDisplay.innerText = `Health: ${this.health}`
        } else {
            message.innerText = `Lord Halloween is full and content. He doesn't want any candy right now`
        }
        /*
        */
    }   
    scare() {
        //can't actually access starting value of power. when you click scare, it sets it to 100, then adds 10. if you change it to gameLevelOne.power, it comes back undefined. the code was like this by accident. this is not what it should do
        if(this.power !== 100) {
            this.power = 100
            this.power = this.power + 10
            powerDisplay.innerText = `Power: ${this.power}`
            message.innerText = `You have stopped ${this.threat}. Lord Halloween's power is ${this.power}`
        }
        /*
        */
    }
    
    runThreat() {
        
        this.power = this.power - 10
        //decrementing the power works, because the function is called as gameLevelOne.runThreat()
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
       powerDisplay.innerText = `Power: ${this.power}`
    }
    
    
    winOrLose() {
        message.innerText = "will you win or lose?"
        
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
        /*
        */
    }
    
    ageAndHealth () {
        message.innerText = "age goiing up, health going down"
    
        /*
        */
        this.age = this.age + 1
        this.health = this.health - 1
        ageDisplay.innerText = `Age: ${this.age} years old.`
        healthDisplay.innerText = `Health: ${this.health}`
    }
    
    clearMessage () {
        //message.innerText = ""
    }
    
    gameTimer() {
        ticks++
        //console.log(ticks)
        if(ticks%10 === 0) {
            gameLevelOne.ageAndHealth()
        } if(ticks%20 === 0) {
            gameLevelOne.runThreat()
        }
    }
    
    
    
    
    //this works to run diff code at diff increments of time. but i can't run the identical functions
    start() {
        gameLevelOne.gameTimer()

        /*
        ticks++
        console.log(ticks)
        if(ticks%2 === 0) {
            console.log("age increasing, health decreasing")
        } 
        if(ticks%5 === 0) {
            console.log("threat detected")
        } 
        */
    } 
}

const gameLevelOne = new Game(1)

//gameLevelOne.ageAndHealth()

//console.log(gameLevelOne.health)
//i can start the interval, call the start function and it works with no errors or undefined in the console

startButton.addEventListener("click", function () {
    gameLevelOne.interval = setInterval(gameLevelOne.start, 1000)
})
//i can refresh page, click start and invoke the start funtion every 1s. i see the start outputs in the console, as long as the code is directly in the start function, not calling others as nested functions. 



candyButton.addEventListener("click", gameLevelOne.candy)

scareButton.addEventListener("click", gameLevelOne.scare)


//todo: get all functions running properly, then figure out how to stop the game.  

//figure out how to stop the time when the game ends. can do a game state variable. if active, run time...but still requires figuring out how to stop time. 

//oooh i could count down from the total time to win! to do that, set ticks to the total time to start, then decrement it in your timer. but how to stop the time if the player loses?

//create global ticks var set at 0, include ticks incrementer in your timer variable, then set the timing of diff functions by a conditional dependent on the ticks. 

//can use timeOut for delaying a game intro screen. or to do an animation bringing the ghost in or something

//make a function to change the pumpkin on an interval

//and maybe an animation one to make the pumpkin jump or something on an interval. 

clearMessage: function () {
},

pumpkinChange: function () {
    
    if(pumpkin.src = "game-images/eye-pumpkin.png") {
        pumpkin.src = "game-images/flame-pumpkin-resize.png"
    } else if(pumpkin.src = "game-images/flame-pumpkin-resize.png") {
        pumpkin.src = "game-images/hand-pumpkin-resize.png"
    } else if(pumpkin.src = "game-images/hand-pumpkin-resize.png") {
    pumpkin.src = "game-images/eye-pumpkin.png"
    }
},
