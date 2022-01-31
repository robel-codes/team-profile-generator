// Employee clsass
class Employee{
    //The constructor function creates a blueprint object for the employee class, which will have name,id and email values
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //The getName method retrieves the user-inputted name for the employee class
    getName() {
        return this.name;
    }

    //The getId method retrieves the user-inputted id for the employee class
    getId() {
        return this.id;
    }

    //The getEmail method retrieves the user-inputted email for the employee class
    getEmail() {
        return this.email;
    }
    
    //The getRole
    getRole() {
        return "Employee";
    }
}

//Exporting employee to be accesed by the specific role classes and generate html files
module.exports = Employee;