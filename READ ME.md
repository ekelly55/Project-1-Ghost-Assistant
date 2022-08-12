<Ghost Assistant>

You are a novice ghost assistant to Lord Halloween, the ruler of Spooky Land. You must keep him healthy and keep his magic spooky power up. His power is what maintains the Spirit of Halloween and keeps Spooky Land happy. 

Lord Halloween's health declines with age. Click the CANDY button to feed him candy and restore his health. The greater danger is that threats to the Spirit of Halloween will deplete Lord Halloween's spooky power. Click the SCARE button to counter those threats and restore his power. 

This game is a variation of Tamagotchi, a handheld digital pet game created by Akihiro Yokoi and Aki Maita.

Wireframe

[![image alt text] (https://i.imgur.com/qbHbCSr.jpeg)](https://i.imgur.com/qbHbCSr.jpeg)



If LH’s health or power gets to 0, he dies and you lose. If you keep LH alive for 100 years you win. 
Age method will have a condition to stop the game and print a new DOM message if either value reaches 0. 
Will have a built in stop method that runs based on this condition and resets the game to its starting state. 

\




JS Refactor

The game data will be contained in an object. Will contain variables for health, age and power. Will contain functions for age, candy and scare. Will also contain a level variable for the player, set at 1, in case I add a function in which the assistant can level up. If I do extend that game in that way, I will make subclasses of the game object with any changes to variables and methods as the player levels up. 

Age method

Update DOM message element with blank string. This element will be a string type variable. 
Conditional comparing health to 0 and power to 0. It’s a boolean value. If true, run game lost method, if false, proceed.
Game lost method:
Update DOM message display. 
Reset LH health, age, power to starting values to play again
Conditional comparing age to x (starting value plus 100) if true, run game won method. If false, proceed. 
Game won method:
Update DOM message display. 
Reset LH health, age, power to starting variables to play again. 
Increment LH age
Health, power and age are numeric data variables
Add x amount to age value
Decrement LH health
Subtract x amount from health value


Threat conditional: if age === some multiple of x, run threat method. If false, function is complete. 
Threat method
Use a string element randomization method to choose a random threat from the threat array. Individual threats will be string type variables that will be passed into the threat method as a parameter
Conditional statement comparing the parameter to one of the possible threats. If true, proceed, if false, compare to next possible threat. Repeat process until the parameter matches a possible threat from the array. Proceed once condition is true. 
Each conditional Decrement power value by x amount based on the parameter.
Update DOM message display

Candy method
Update the DOM message element to a blank string. 
Conditional. Compare health to starting value. If true, don’t run rest of function.  If false, proceed
If true, update DOM display element telling player that LH is full and doesn’t want any candy. 
Increment LH health by x amount
Add x to the health variable value. 

Scare method
Update DOM message element with blank string. 
Conditional. Compare power to starting value. If true, don’t run rest of function. If false, proceed.
If true, update DOM element message to to tell the player that they cannot increase LH’s power unless it has declined. 
Increment LH power by x amount. 
Add x to LH power value. 
Update DOM element message to tell player that the threat has been countered and LH’s updated power level. 


Additional ideas for scaling up

Include a game timer so that the player doesn’t have to advance time through clicking a button. 

Use pop-up windows for the game intro and messages, rather than taking up space on the game screen. 

Use CSS animations with the candy method to move food to him. I will need to research how to do this, though I’ve done it in the past. I know it involves css for positioning and functions. Maybe a loop? Move n pixels x and or n pixels y on each iteration? The threats can also appear on screen, with animations. 

Your supply of candy depletes. Have to go trick or treating to replenish. The candy count will have to decrement with each feeding. Will need a trick or treat method to replenish it. The function will increment candy by a random amount within a range and also decrement time by 1. This will require using a number randomization method, such as Math floor * Math random. Trick or treating takes one turn. So if you don’t get a good amount and have to do it again, Lord Halloween’s health decrements in the meantime. Different candies have different healing values by incrementing the health by greater amounts. I would need to hard code the candy method to accept those specific parameters and include a conditional based on input value. 

Use CSS to create a power meter that displays colors instead of numbers. I will need the age method to include a condition with a range of numeric values to change the color of the power meter. 

Make the game about how the assistant  improves and levels up.  Make a base class and subclasses. Subclasses will have access to more scares, including specific scares for specific characters. This would require conditional statements in the scare method that would have to account for what the threat is and what the assistant’s level is. Also, the  player will only have a certain number of scares to use. They will recharge power all the way, but they’re limited, so the strategy is to wait until the power level is low so that it’s worth it. But if you wait too long, Lord Halloween will run out of power and you lose. 


