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
        name: "title"
    },
    {    
        message: "What is your name?",
        name: "name"
    },
    {
        message: "What is your age?",
        name: "age"
    }
];

// function to save to file
async function writeToFile(fileName, data) {
    await writeAsync(fileName, data);
}

//function to run this app
async function init() {
    const answers = await inquirer.prompt(questions);
    
    const htmlString = generateMarkdown(answers);

    writeToFile(answers.name + ".md", htmlString)
    // await writeAsync(answers.name + ".md", htmlString);

}

// call the function to run this app
init();
