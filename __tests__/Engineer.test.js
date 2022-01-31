const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("constructor tests", () => {
        test("should construct a new instance of an Engineer class", () =>{
            const engineer =new Engineer('Robel', 120, 'rofikre@yahoo.com', 'robel-codes');
            expect(engineer).toBeInstanceOf(Engineer);
        });
        test("should construct a new instance of an engineer class with name,id,email,github", () =>{
            const engineer =new Engineer('Robel', 120, 'rofikre@yahoo.com', 'robel-codes');
            expect(engineer).toEqual({
                name: "Robel",
                id: 120,
                email: "rofikre@yahoo.com",
                github: "robel-codes",
                role: "Engineer"
            });
        });
    });
    describe("method tests", () => {
        test("should return id when the getId method is called", () =>{
            const engineer = new Engineer('Robel', 120, 'rofikre@yahoo.com', 'robel-codes');
            expect(engineer.getId()).toEqual(120);
        });
        test("should return name when the getName method is called", () =>{
            const engineer = new Engineer('Robel', 120, 'rofikre@yahoo.com', 'robel-codes');
            expect(engineer.getName()).toEqual("Robel");
        });
        test("should return email when the getEmail method is called", () =>{
            const engineer = new Engineer('Robel', 120, 'rofikre@yahoo.com', 'robel-codes');
            expect(engineer.getEmail()).toEqual("rofikre@yahoo.com");
        });
        test("should return name when the getGithub method is called", () =>{
            const engineer = new Engineer('Robel', 120, 'rofikre@yahoo.com', 'robel-codes');
            expect(engineer.getGithub()).toEqual("robel-codes");
        });
        test("should return role when the getRole method is called", () =>{
            const engineer = new Engineer('Robel', 120, 'rofikre@yahoo.com', 'robel-codes');
            expect(engineer.getRole()).toEqual("Engineer");
        });

    });
});
