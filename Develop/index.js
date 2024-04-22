// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err){
            console.log(err);
        }
        console.log("README generated.");
    })
}

// TODO: Create a function to initialize app
function init() {
    console.log("Leave entries blank if N/A.");
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter README title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a project description:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter usage instructions:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Describe how to contribute to the project:',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Describe project tests:',
            name: 'tests',
        },
        {
            type: 'list',
            message: 'Please select a license:',
            name: 'license',
            choices: ['No License', 'MIT License', 'GNU GPL v3'],
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please enter your Email:',
            name: 'email',
        }

    ])
    .then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    });
  
}

// Function call to initialize app
init();
