const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("constructor tests", () => {
        test("should construct a new instance of an Intern class", () =>{
            const intern =new Intern('Robel', 120, 'rofikre@yahoo.com', 'UVA');
            expect(intern).toBeInstanceOf(Intern);
        });
        test("should construct a new instance of an Intern class with name,id,email,school", () =>{
            const intern =new Intern('Robel', 120, 'rofikre@yahoo.com', 'UVA');
            expect(intern).toEqual({
                name: "Robel",
                id: 120,
                email: "rofikre@yahoo.com",
                school: "UVA",
                role: "Intern"
            });
        });
    });
    describe("method tests", () => {
        test("should return id when the getId method is called", () =>{
            const intern = new Intern('Robel', 120, 'rofikre@yahoo.com', 'UVA');
            expect(intern.getId()).toEqual(120);
        });
        test("should return name when the getName method is called", () =>{
            const intern = new Intern('Robel', 120, 'rofikre@yahoo.com', 'UVA');
            expect(intern.getName()).toEqual("Robel");
        });
        test("should return email when the getEmail method is called", () =>{
            const intern = new Intern('Robel', 120, 'rofikre@yahoo.com', 'UVA');
            expect(intern.getEmail()).toEqual("rofikre@yahoo.com");
        });
        test("should return name when the getSchool method is called", () =>{
            const intern = new Intern('Robel', 120, 'rofikre@yahoo.com', 'UVA');
            expect(intern.getSchool()).toEqual("UVA");
        });
        test("should return role when the getRole method is called", () =>{
            const intern = new Intern('Robel', 120, 'rofikre@yahoo.com', 'UVA');
            expect(intern.getRole()).toEqual("Intern");
        });

    });
});
