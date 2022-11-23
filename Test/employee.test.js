const Employee = require("../lib/Employee");

test("Can pull Employee instance", () => {
    const employ = new Employee();
    expect(typeof (employ)).toBe("object");
});

test("Can set name", () => {
    const name = "Andrew";
    const employ = new Employee(name);
    expect(employ.name).toBe(name);
});

test("Can set id", () => {
    const testValue = 100;
    const employ = new Employee("Andrew", testValue);
    expect(employ.id).toBe(testValue);
});

test("Can set email", () => {
    const testValue = "acaseyl@hotmail.com";
    const employ = new Employee("Andrew", 1, testValue);
    expect(employ.email).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const employ = new Employee("Andrew", 1, "acaseyl@hotmail.com", "Employee");
    expect(employ.getRole()).toBe(testValue);
});