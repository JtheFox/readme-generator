// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License Badge](https://img.shields.io/badge/license-${license.length > 0 ? license.split('-')[0] : 'none'}-blue)`
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license.length === 0 ? '' : 
    `[${license.split('-')[0]}](https://choosealicense.com/licenses/${license})`;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This application ${license.length === 0 ? 'has no license.' :
  `is licensed under the ${renderLicenseLink(license)} license.`}`
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
1. [Description](#description)
2. [Installation Instructions](#installation)
3. [Usage Information](#usage)
4. [Contribution Guidelines](#contributing)
5. [Test Instructions](#tests)
6. [Questions](#questions)
7. [License](#license)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing.split(',').map(e => `- ${e.trim()}`).join('\n')}

## Tests
${data.tests}

## Questions?
Contact me:
- [At GitHub/${data.username}](https://github.com/${data.username})
- [Email Me](mailto:${data.email})

## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
