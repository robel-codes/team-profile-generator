const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("constructor tests", () => {
        test("should construct a new instance of an employee class", () =>{
            const employee =new Employee('Robel', 120, 'rofikre@yahoo.com');
            expect(employee).toBeInstanceOf(Employee);
        });
        test("should construct a new instance of an employee class with name,id,email", () =>{
            const employee =new Employee('Robel', 120, 'rofikre@yahoo.com');
            expect(employee).toEqual({
                name: "Robel",
                id: 120,
                email: "rofikre@yahoo.com",
            });
        });
    });
    describe("method tests", () => {
        test("should return id when the getId method is called", () =>{
            const employee = new Employee('Robel', 120, 'rofikre@yahoo.com');
            expect(employee.getId()).toEqual(120);
        });
        test("should return name when the getName method is called", () =>{
            const employee = new Employee('Robel', 120, 'rofikre@yahoo.com');
            expect(employee.getName()).toEqual("Robel");
        });
        test("should return email when the getEmail method is called", () =>{
            const employee = new Employee('Robel', 120, 'rofikre@yahoo.com');
            expect(employee.getEmail()).toEqual("rofikre@yahoo.com");
        });
        test("should return role when the getRole method is called", () =>{
            const employee = new Employee('Robel', 120, 'rofikre@yahoo.com');
            expect(employee.getRole()).toEqual("Employee");
        });

    });
});
