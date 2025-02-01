class Person {
    constructor(name) {
        this.name = name; // 'name' is the property of class Person. In java, we would've define this property as 'String name' as instance variable.
    }

    walk() {
        console.log(`${this.name} is walking to the class.`);
    }
}

/**
 * Here, the Teacher class is inheriting all the properties and methods of class Person.
 */
class Teacher extends Person {
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

const teacher = new Teacher("Ujjwal", "MSc");
const teach = teacher.teach.bind(teacher); // binding 'this' keyword with teacher object
teach(); // standalone function

teacher.walk(); // directly invoking walk() method without binding 'this' keyword
