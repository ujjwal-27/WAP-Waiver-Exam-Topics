import { Animal } from "./Animal.js";

class Tiger extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }

    hunt() {
        console.log(`${this.name} is hunting`);
    }
}

const tiger = new Tiger('Tiger');

tiger.hunt();
tiger.eat();
tiger.sleep();