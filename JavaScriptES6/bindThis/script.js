"use strict"; // using strict mode. It's a mode to execute javaScript in more protective way. It prevents potential problems.

/**
 * Example 1
 * 
 */
let athlete = {
    name: 'Ujjwal',
    run() {
        return `${this.name} is running`;
    },
}

console.log(athlete.run()); // calling function as method in athlete object. Here, 'this' will return reference to 'athlete' object.

// Binding the 'athlete' object with the 'run()' method, so that 'this' keyword inside 'run()' method explicitly refers to 'athlete' object.
// Doing this makes 'run()' method a 'standalone' function.
const run = athlete.run.bind(athlete);
console.log(run()); // standalone function


/**
 * Example 2
 */
class Game {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log(`Game "${this.name}" is starting...`);

        // Bind `this` to ensure the correct context
        setTimeout(this.countdown.bind(this), 1000); // could be written as 'this.countdown()'
        // setTimeout(this.countdown(), 1000);
    }

    countdown() {
        console.log(`Game "${this.name}" is running...`);
    }
}

const myGame = new Game("Chess");

// Here, inside start() method, 'this' keyword is implemented. 
// 'myGame' is the reference variable of class object 'Game'.
// Binding 'myGame' explicitly refers to the 'Game' object.
const game = myGame.start.bind(myGame); // could be written as 'myGame.start()';
game(); // standalone function






