export class Person {
    constructor(name) {
        this.name = name; // 'name' is the property of class Person. In java, we would've define this property as 'String name' as instance variable.
    }

    walk() {
        console.log(`${this.name} is walking to the class.`);
    }
}
