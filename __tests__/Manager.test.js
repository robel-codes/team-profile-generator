const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("constructor tests", () => {
        test("should construct a new instance of an Manager class", () =>{
            const manager =new Manager('Robel', 120, 'rofikre@yahoo.com', '35');
            expect(manager).toBeInstanceOf(Manager);
        });
        test("should construct a new instance of an Manager class with name,id,email,school", () =>{
            const manager =new Manager('Robel', 120, 'rofikre@yahoo.com', '35');
            expect(manager).toEqual({
                name: "Robel",
                id: 120,
                email: "rofikre@yahoo.com",
                officeNumber: "35",
                role: "Manager"
            });
        });
    });
    describe("method tests", () => {
        test("should return id when the getId method is called", () =>{
            const manager = new Manager('Robel', 120, 'rofikre@yahoo.com', '35');
            expect(manager.getId()).toEqual(120);
        });
        test("should return name when the getName method is called", () =>{
            const manager = new Manager('Robel', 120, 'rofikre@yahoo.com', '35');
            expect(manager.getName()).toEqual("Robel");
        });
        test("should return email when the getEmail method is called", () =>{
            const manager = new Manager('Robel', 120, 'rofikre@yahoo.com', '35');
            expect(manager.getEmail()).toEqual("rofikre@yahoo.com");
        });
        test("should return role when the getRole method is called", () =>{
            const manager = new Manager('Robel', 120, 'rofikre@yahoo.com', '35');
            expect(manager.getRole()).toEqual("Manager");
        });

    });
});
