class Person {
    constructor(name) {
        this.name = name; // 'name' is the property of class Person. In java, we would've define this property as 'String name' as instance variable.
    }

    walk() {
        console.log(`${this.name} is walking to the class.`);
    }
}

/**
 * Here, the Teacher class is inheriting all the properties and methods of class Person
 */
class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching.`);

    }
}

const teacher = new Teacher("Ujjwal");
const teach = teacher.teach.bind(teacher); // binding 'this' keyword with teacher object
teach(); // standalone function

teacher.walk(); // directly invoking walk() method without binding 'this' keyword
