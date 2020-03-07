const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, title, officeNumber){
        super(name, id, title);
        this.officeNumber = school;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

let lad = new Manager("Jac", 5, "deity", 42)

console.log(lad.getSchool())


