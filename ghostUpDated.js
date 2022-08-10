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


const game = {
     
        assistantLevel: 1,
        health: 100,
        age: 3000000000,
        power: 100,
        candyLevel: 100,
        threat: "",
        threatList: ["Timmy's Mom", "Timmy's Principal", "Santa"],
    
    candy: function() {
        if(game.health < 100 && game.health > 90) {
            game.health = 100
        } else if(game.health < 100) {
            game.health = game.health + 10
        } else {
        message.innerText = `Lord Halloween is full and content. He doesn't want any candy right now`
        }
    healthDisplay.innerText = `Health: ${game.health}`
    },
    
    scare: function() {
        
        if(game.power !== 100) {
            game.power = 100
            powerDisplay.innerText = `Power: ${game.power}`
            message.innerText = `You have stopped ${game.threat}. Lord Halloween's power is ${ game.power}`
            game.power = 100
        }
    },
        /*
        */
    
    runThreat: function () {
        
        game.power = game.power - 10
      
        game.threat = game.threatList[Math.floor(Math.random()*game.threatList.length)]
        if( game.threat === "Timmy's Mom") {
             message.innerText =`Timmy's Mom hates Halloween! She won't let Timmy decorate the house! Her attitude is threatening the spirit of Halloween for Timmy, and Lord Halloween is losing power! Scare her to counter the threat and restore Lord Halloween's power!`
             game.power =  game.power - 10    
        } else if(game.threat === "Timmy's Pincipal") {
             message.innerText = `Timmy's Principal hates when kids have fun at school! They won't let the students wear costumes or have a party! Their attitude is threatening the spirit of Halloween for all the students, and Lord Halloween is losing power! Scare them to counter the threat and restore Lord Halloween's power!`
             game.power =  game.power - 20
        } else if( game.threat === "Santa") {
             message.innerText = `The War on Halloween has begun! Stores are already selling Christmas decorations and playing All I Want For Christmas! Santa is threatening the spirit of Halloween for all everyone, and Lord Halloween is losing power! Scare Santa to counter the threat and restore Lord Halloween's power!`
             game.power =  game.power - 30
        }
        powerDisplay.innerText = `Power: ${ game.power}`
    },
        /*
        */
       
       
       winOrLose: function() {
           message.innerText = "will you win or lose?"
           
           if( game.health === 0 ||  game.power === 0) {
               message.innerText = `Game Over! The spirit of Halloween is fading away. Soon it will just be Christmas and tests all year long`
               game.power = 100;
               game.age = 3000000000;
               game.health = 100;
               game.assistantLevel = game.assistantLevel + 1;
            //stop game timer
        } else if(game.age === 3000000100) {
             message.innerText = `You win! Lord Halloween has reached the ripe old age of ${ game.age}! You have sustained the spirit of Halloween for ${ game.age - 3000000000} years! Click the start button to play again.`
            //stop game timer
        } 
    },
        /*
        */
    
    ageAndHealth: function () {
        message.innerText = "age goiing up, health going down"
    
        game.age =  game.age + 1
        game.health =  game.health - 1
        ageDisplay.innerText = `Age: ${game.age} years old.`
        healthDisplay.innerText = `Health: ${game.health}`
    },
    
    clearMessage: function () {
    },
    
    gameTimer: function() {
        ticks++
        //console.log(ticks)
        if(ticks%5 === 0) {
            game.ageAndHealth()
            /*
        } if(ticks%10 === 0) {
            */
           game.runThreat()
        }
        message.innerText = ""
    },
  
    start: function() {
        game.gameTimer()
    }, 
}



//gameLevelOne.ageAndHealth()

//console.log(gameLevelOne.health)


startButton.addEventListener("click", function () {
    interval = setInterval(game.start, 1000)
})




candyButton.addEventListener("click", game.candy)

scareButton.addEventListener("click", game.scare)


//todo: get all functions running properly, then figure out how to stop the game.  

//figure out how to stop the time when the game ends. can do a game state variable. if active, run time...but still requires figuring out how to stop time. 

//oooh i could count down from the total time to win! to do that, set ticks to the total time to start, then decrement it in your timer. but how to stop the time if the player loses?

//create global ticks var set at 0, include ticks incrementer in your timer variable, then set the timing of diff functions by a conditional dependent on the ticks. 

//can use timeOut for delaying a game intro screen. or to do an animation bringing the ghost in or something

//make a function to change the pumpkin on an interval

//and maybe an animation one to make the pumpkin jump or something on an interval. 