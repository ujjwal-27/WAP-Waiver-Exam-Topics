/**
 * Objects are the collection of key-value pairs in JS
 * 
 * Here, we have an object named 'athlete' with two properties 'name' and 'age', and two methods 'run()' and 'jump()'.
 * 'this' keyword is used for accessing the property within the object
 */
let athlete = {
    name: 'Ujjwal',
    age: 27,
    run(distance) {
        return `${this.name}, who is ${this.age} years young, is running ${distance} km.`;
    },
    jump(height) {
        return `${this.name}, who is ${this.age} years young, is jumping ${height} ft. high.`;
    }
}

let targetMember = 'name';
athlete[targetMember] = 'Jordon';  // accessing property value using [] bracket notation.

athlete.age = 28; // accessing property value using '.' dot notation.

console.log(athlete.run(22));
console.log(athlete.jump(7));


