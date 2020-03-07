const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, title, school){
        super(name, id, title);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

let lad = new Intern("Jac", 5, "g-d engineer", "Haavaad")

console.log(lad.getSchool())



