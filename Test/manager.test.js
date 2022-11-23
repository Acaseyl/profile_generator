const Manager = require("../lib/Manager");

test("Can set office number", () => {
    const testValue = 5011;
    const e = new Manager("Andrew", 1, "acaseyl@hotmail.com", testValue, "Manager");
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return Manager", () => {
    const testValue = "Manager";
    const e = new Manager("Andrew", 5011, "acaseyl@hotmail.com", 5011, "Manager");
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number", () => {
    const testValue = 5011;
    const e = new Manager("Andrew", 1, "acaseyl@hotmail.com", testValue, "Manager");
    expect(e.getOfficeNumber()).toBe(testValue);
});