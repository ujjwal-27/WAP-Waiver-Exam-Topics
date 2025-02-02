import Teacher, { attendance } from "./teacher.js";

/**
 * default export --> import ... from '';
 * named export --> import { ... } from ''; 
 * 
 * Here, Teacher is default export from teacher module, and attendance is named export.
 * A module can have both named and default export.
 */

const teacher = new Teacher("Ujjwal", "MSc");
const teach = teacher.teach.bind(teacher); // binding 'this' keyword with teacher object
teach(); // standalone function

teacher.walk(); // directly invoking walk() method without binding 'this' keyword

attendance();