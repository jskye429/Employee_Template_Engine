const inquirer = require("inquirer");
const Employee = require("./lib/Employee")

inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "number",
        message: "What is your ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your title?",
        name: "title"
    }
]).then(function(response){
    //console.log(response.name)
    const employee = new Employee(response.name, response.id, response.title)
    console.log(employee)
})

// if(title === engineer) prompt engineer questions 