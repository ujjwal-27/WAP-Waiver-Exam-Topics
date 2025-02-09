export class Animal {
    alive = true;

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}