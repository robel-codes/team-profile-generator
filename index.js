const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Manager = require('./lib/Manager');


// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

// start of manager prompts 
const managerPrompt = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please add the name of the manager of the team', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please Type the manager's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the ID with numbers")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please add an email of the manager.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        const manager = new Manager (name, id, email, officeNumber);

        employeeArray.push(manager); 
        console.log(manager); 
    })
};