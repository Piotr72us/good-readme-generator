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



//function to run this app
async function init() {
    //get answers
    const answers = await inquirer.prompt(questions);

    // generate html
    const htmlString = generateMarkdown(answers);
    
    // save to file
    await writeAsync(answers.name + ".md", htmlString);

}

// call the function to run this app
init();
