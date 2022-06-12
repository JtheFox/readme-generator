// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // TODO: add license
  return `# ${data.title}
  
  ## Table of Contents
  1. [Description](#description)
  2. [Installation Instructions](#installation)
  3. [Usage Information](#usage)
  4. [Contribution Guidelines](#contributing)
  5. [Test Instructions](#tests)
  6. [Questions](#questions?)
  7. [License](#license)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation.split(',').map(e => `- ${e.trim()}`).join('\n')}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing.split(',').map(e => `- ${e.trim()}`).join('\n')}

  ## Questions?
  Contact me:
  - [At GitHub/${data.username}](https://github.com/${data.username})
  - [Email Me](mailto:${data.email})

  ## License

`;
}

module.exports = generateMarkdown;
