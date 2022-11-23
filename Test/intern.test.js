const Intern = require("../lib/Intern");

test("Can set school", () => {
    const testValue = "school";
    const e = new Intern("Andrew", 1, "acaseyl@hotmail.com", testValue, "Intern");
    expect(e.school).toBe(testValue);
});

test("getRole() should return Intern", () => {
    const testValue = "Intern";
    const e = new Intern("Andrew", 1, "acaseyl@hotmail.com", "University of Rio Grande", "Intern");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school", () => {
    const testValue = "school";
    const e = new Intern("Andrew", 1, "acaseyl@hotmail.com", testValue, "Intern");
    expect(e.getSchool()).toBe(testValue);
});
