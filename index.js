// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions, separated by comma:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions, separated by comma:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select your license type:',
        choices: []
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function init() {
    console.log('Welcome to the Professional Readme Generator');
    inquirer.prompt(questions)
        .then(answers => {
            generateMarkdown(answers);
            // TODO: write to file
        })
        .catch(err => console.error(err));
}

// Function call to initialize app
init();
