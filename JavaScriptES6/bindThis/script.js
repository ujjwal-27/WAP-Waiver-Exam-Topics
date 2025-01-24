"use strict"; // using strict mode. It's a mode to execute javaScript in more protective way. It prevents potential problems.

/**
 * Example 1
 * 
 */
let athlete = {
    name: 'Ujjwal',
    run() {
        return this;
    },
}

console.log(athlete.run()); // calling function as method in athlete object. Here, 'this' will return reference to 'athlete' object.

const run = athlete.run.bind(athlete);
console.log(run());


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
        setTimeout(this.countdown.bind(this), 1000);
        // setTimeout(this.countdown(), 1000);
    }

    countdown() {
        console.log(`Game "${this.name}" is running...`);
    }
}

const myGame = new Game("Chess");
myGame.start();






