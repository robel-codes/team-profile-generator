// import the employee parent class
const Employee = require('./Employee');

//Engineer class extends the employee class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //Inherited properties from the parent employee class
        super (name, id, email);
        this.github = github;
        //Define the role as engineer
        this.role = "Engineer";
    }
    
    //getGithub method on engineer returns the user-inputeted github user name
    getGithub () {
        return this.github;
    }

    //getRole return the engineer role from the instance of the engineer class
    getRole () {
        return this.role;
    }

}

module.exports = Engineer;