import { Animal } from "./Animal.js";

class Whale extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }

    swim() {
        console.log(`${this.name} is swimming`);
    }
}

const whale = new Whale('Whale');
whale.swim();
whale.eat();
whale.sleep();