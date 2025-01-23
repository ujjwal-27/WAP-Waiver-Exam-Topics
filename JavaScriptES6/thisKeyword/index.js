"use strict"; // using strict mode. It's a mode to execute javaScript in more protective way. It prevents potential problems.

/**
 * In JS, 'this' is a special keyword which returns reference to current object.
 * 'this' keyword is implemented in objects topic too.
 */
let athlete = {
    name: 'Ujjwal',
    run() {
        return this;
    },
}

console.log(athlete.run()); // calling function as method in athlete object. Here, 'this' will return reference to 'athlete' object.

let run = athlete.run; // Here, athlete.run doesn't invoke 'run' method, but only gets the 'reference' of 'run' method.
console.log(run()); // calling function as a standalone object, or outside object. This will return 'global object/window object'. But, with strict mode on, it will return 'undefined'.



