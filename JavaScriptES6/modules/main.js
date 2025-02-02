import { Teacher } from "./teacher.js";

const teacher = new Teacher("Ujjwal", "MSc");
const teach = teacher.teach.bind(teacher); // binding 'this' keyword with teacher object
teach(); // standalone function

teacher.walk(); // directly invoking walk() method without binding 'this' keyword