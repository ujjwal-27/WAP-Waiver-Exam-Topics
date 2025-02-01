import { Person } from "./person.js";

export class Teacher extends Person {
    /**
     * The constructor takes two parameters: name and degree.
     * Since, 'name' is already the property of 'Person' class, it must be passed through the constructor of 'Person' class using 'super()' method.
     * @param {String} name 
     * @param {String} degree 
     */
    constructor(name, degree) {
        super(name); // this calls the constructor of a parent class
        this.degree = degree;
    }

    teach() {
        console.log(`${this.name} teaches ${this.degree} courses.`);

    }
}