// import the employee parent class
const Employee = require('./Employee');

//Intern class extends the employee class
class Intern extends Employee {
    constructor (name, id, email, school) {
        //Inherited properties from the parent employee class
        super (name, id, email);
        this.school = school;
        //Define the role as intern
        this.role = "Intern";
    }
    
    //getSchool method on Intern returns the user-inputeted intern school
    getSchool () {
        return this.school;
    }

    //getRole return the intern role from the instance of the Intern class
    getRole () {
        return this.role;
    }

}

module.exports = Intern;