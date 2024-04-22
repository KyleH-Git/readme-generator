// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'No License'){
    return '';
  }
  if(license === 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if(license === 'GNU GPL v3'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'No License'){
    return '';
  }
  if(license === 'MIT License'){
    return `This README generator is licensed under the `+ `[${license}](https://opensource.org/licenses/MIT)`;
  }
  if(license === 'GNU GPL v3'){
    return `This README generator is licensed under the ` + `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'No License'){
    return '';
  }
  return  `## License
    ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Contribute
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Feel free to reach out and contact me with any questions you may have.
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
