const inquirer = require("inquirer");
const fs = require("fs");
// const open = require("open");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeAsync = util.promisify(fs.writeFile);


// array of questions to generate readme file
const questions = [
    {
        message: "What is your project title?",
        name: "title",
        type: "input"
    },
    {
        message: "What is your descripion?",
        name: "description",
        type: "input"
    },
    {
        message: "Installation instructions",
        name: "installation",
        type: "input"
    },
    {
        message: "Usage information",
        name: "usage",
        type: "input"
    },
    {
        message: "Contribution guidelines",
        name: "contribution",
        type: "input"
    },
    {
        message: "Test instructions?",
        name: "test",
        type: "input"
    },
    {
        message: "Licenses",
        choices: ["MIT", "Apache 2.0", "GPL 3.0"],
        name: "license",
        type: "list"
    },
    {
        message: "Github username?",
        name: "username",
        type: "input"
    }

    // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
];



//function to run this app
async function init() {
    //get answers
    const answers = await inquirer.prompt(questions);

    // generate html
    const htmlString = generateMarkdown(answers);

    // save to file
    await writeAsync("README.md", htmlString);

}

// call the function to run this app
init();
