const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, title, github){
        super(name, id, title);
        this.github = github;
    }

    getGitHub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

let lad = new Engineer("josh", 5, "mayor engineer", "cheeky_nandos")

console.log(lad.getId())