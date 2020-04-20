const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        }, {
            type: "input",
            message: "What is the name of your project",
            name: "title"
        }, {
            type: "input",
            message: "What is the name of the author",
            name: "author"
        },
        {
            type: "input",
            message: "Add the link of your project.",
            name: "url"
        }, {
            type: "input",
            message: "Describe your project.",
            name: "description"
        },
        {
            type: "list",
            message: "What license does your project have?",
            choices: ["MIT", "None", "APACHE"],
            name: "license"
        },


    ])
    .then(function (response) {
        //create data object
        fs.writeFileSync("README.md", generateMarkdown(response), function (err) {
            if (err) return console.log(err)
        });
    });
