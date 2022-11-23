const Engineer = require("../lib/Engineer");

test("Can set github account", () => {
    const testValue = "GitHubUser";
    const engin = new Engineer("Andrew", 1, "acaseyl@hotmail.com", testValue, "Engineer");
    expect(engin.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const engin = new Engineer("Andrew", 1, "acaseyl@hotmail.com", "GitHubUser", "Engineer");
    expect(engin.getRole()).toBe(testValue);
});

test("Can get github username", () => {
    const testValue = "GitHubUser";
    const engin = new Engineer("Andrew", 1, "acaseyl@hotmail.com", testValue, "Engineer");
    expect(engin.getGithub()).toBe(testValue);
});