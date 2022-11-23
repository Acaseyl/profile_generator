const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");

function runQuestions() {
  const questions = [
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your title",
      choices: ["Manager", "Engineer", "Intern"],
      name: "title",
    },
  ];

  return inquirer.prompt(questions);
}

function runManager() {
  const questions = [
    {
      type: "input",
      message: "What is your office number?",
      name: "Office Number",
    },
  ];

  return inquirer.prompt(questions);
}

function runEngineer() {
  const questions = [
    {
      type: "input",
      message: "What is your github?",
      name: "Git hub",
    },
  ];

  return inquirer.prompt(questions);
}

function runIntern() {
  const questions = [
    {
      type: "input",
      message: "What school do you attend?",
      name: "school",
    },
  ];

  return inquirer.prompt(questions);
}

async function initiate() {
  let employeeArray = [];
  const maxTimes = 5;
  for (i = 0; i < maxTimes; i++) {
    const promise = new Promise((resolve, reject) => {
      runQuestions()
        .then(function ({ name, id, email, title }) {
          if (title === "Manager") {
            runManager().then(function ({ officeNumber }) {
              this.employee = new Manager(name, id, email, officeNumber, title);
              console.log(officeNumber);
              employeeArray.push(employee);
              resolve("done");
            });
          } else if (title === "Engineer") {
            runEngineer().then(function ({ github }) {
              this.employee = new Engineer(name, id, email, github, title);
              console.log(github);
              employeeArray.push(employee);
              resolve("done");
            });
          } else if (title === "Intern") {
            runIntern().then(function ({ school }) {
              this.employee = new Intern(name, id, email, school, title);
              console.log(school);
              employeeArray.push(employee);
              resolve("done");
            });
          }
        })
        .catch(function (err) {
          console.log("There was an err.");
          console.log(err);
        });
    });

    const result = await promise;
    console.log(result);
  }

  function displayTitle(employee) {
    if (employee.title === "Manager") {
      console.log(employee.officeNumber);
      return `office number: ${employee.officeNumber}`;
    }

    if (employee.title === "Intern") {
      return `school: ${employee.school}`;
    }

    if (employee.title === "Engineer") {
      return `gitHub: ${employee.github}`;
    }
  }
  function getCardHtml() {
    let html = " ";
    for (j = 0; j < maxTimes; j++) {
      console.log(employeeArray[j]);
      html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                <div class="col">
                    <h4>${employeeArray[j].name}</h4>
                </div>
                <div class="col">
                    <h4>${employeeArray[j].title}</h4 >
                </div >
                <ul class="list-group text">
                    <li">ID: ${employeeArray[j].id}</li>
                    <li>Email: ${
                      employeeArray[j].email
                    }</li>
                    <li> ${displayTitle(
                      employeeArray[j]
                    )}</li>
                </ul>
            </div> `;
    }
    return html;
  }

  let html = `<!DOCTYPE html>
          <html lang="en">
          <head> 
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
            <title>Employee Profiles</title>
              <style>
                .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .card {
                padding: 15px;
                border-radius: 6px;
                background-color: white;
                color: lightskyblue;
                margin: 15px;
            }
            .text {
                padding: 15px;
                border-radius: 6px;
                background-color: lightskyblue;
                color: black;
                margin: 15px;
            }
            .col {
              flex: 1;
              text-align: center;
              color: black;
            }
        </style>
    </head>
       <body>
        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
          <span class="navbar-brand mb-0 h1">
            <h1>My Team</h1>
              </span>
               </nav>
                <div class="row">
                  ${getCardHtml()}
                </div>
      </body>
    
    </html>
    `;
  fs.writeFile("yourHTML.html", html, function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  });
}
initiate();
