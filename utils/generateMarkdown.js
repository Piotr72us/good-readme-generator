
function generateMarkdown(data) {
//check user input to assign appropriate badge
var licensetxt = "";
if (data.license === "MIT") {
    data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    licensetxt = "MIT"
}

else if (data.license === "Apache 2.0") {
    data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    licensetxt = "Apache 2.0"
}

else {
    console.log("ok")
}

// display appropriate data inside README file
return `
# ${data.title}
${data.license}

## Description
${data.description}

## Table of Contents
* [Test](#Test)

## Installation
This application will be invoked with the following command:
${data.installation}

## Usage
${data.usage}

## License
This application is covered under ${licensetxt} license.

## Contributing
${data.contribution}

## Test
${data.test}

## Questions
${data.username}
`
}

module.exports = generateMarkdown;