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
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
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
        choices: [
            {
                name: 'MIT',
                value: 'MIT'
            },
            {
                name: 'APACHE',
                value: 'Apache'
            },
            {
                name: 'GPL',
                value: 'GPL-3'
            },
            {
                name: 'BSL',
                value: 'BSL-1.0'
            },
            {
                name: 'None',
                value: ''
            }
        ],
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

function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, data);
        return console.log('README generated successfully!');
    } catch { err => { return console.error(err) }}
}

function init() {
    console.log('Welcome to the Professional Readme Generator');
    inquirer.prompt(questions)
        .then(answers => {
            writeToFile('README-generated.md', generateMarkdown(answers));
        })
        .catch(err => console.error(err));
}

// Function call to initialize app
init();
