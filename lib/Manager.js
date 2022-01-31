// import the employee parent class
const Employee = require('./Employee');

//Manager class extends the employee class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //Inherited properties from the parent employee class
        super (name, id, email);
        this.officeNumber = officeNumber;
        //Define the role as Manager
        this.role = "Manager";
    }

    //getRole return the manager role from the instance of the Intern class
    getRole () {
        return this.role;
    }

}

module.exports = Manager;