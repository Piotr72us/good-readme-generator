const inquirer = require("inquirer");
const fs = require("fs");


// const writeAsync = util.promisify(fs.writeFile);

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

//function to save user input to README file
// function writeToFile (fileName, data) {
//     await writeAsync(fileName, data);
// }

//function to run this app
async function init() {
    const { name, age } = await inquirer.prompt(questions);
    console.log(name);
    writeToFile(name, name);

}

// call the function to run the app
init();

