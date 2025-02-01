class Person {
    constructor(name) {
        this.name = name; // 'name' is the property of class Person. In java, we would've define this property as 'String name' as instance variable.
    }

    walk() {
        console.log(`${this.name} is walking.`);
    }
}

const person1 = new Person("Ujjwal");
const walk1 = person1.walk.bind(person1); // binding 'this' keyword with person1 object

const person2 = new Person("Jordon");
const walk2 = person2.walk.bind(person2); // binding 'this' keyword with person2 object. Try binding 'person1' here, and see the difference

// standalone functions
walk1();
walk2();

