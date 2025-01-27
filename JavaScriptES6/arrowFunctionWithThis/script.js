/**
 * Here, the method 'displayAge' is defined with 'arrow function'.
 * Since, arrow function does not have its own 'this', it tries to 'inherit' the context/property of 'this' from outer function where it is defined.
 * The 'displayAge' method is directly defined inside 'athlete' object as a 'standalone method'.
 * Therefore, it does not have any medium to inherit 'this' keyword, and returns 'undefined'.
 */
const athlete = {
    age: 27,
    displayAge: () => {
        return `He is ${this.age}.`
    }
}

const message = athlete.displayAge.bind(athlete);
console.log("Athlete object: " + message());


/**
 * Here, the arrow function 'displayLanguage' is defined within 'info' method of 'athlete' object.
 * 'this' keyword in 'displayLanguage' function inherits 'this' of 'info' method (which is technically a function)
 * This is how arrow function works.
 */
const programmer = {
    language: 'Java',
    info() {
        const displayLanguage = () => {
            return `He is ${this.language} programmer.`;
        };

        console.log("Programmer object: " + displayLanguage());
    }

}

programmer.info();


