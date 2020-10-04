
function generateMarkdown(data) {

if (data.license === "MIT") {
    data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}

else if (data.license === "Apache 2.0") {
    data.license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}

else {
    console.log("ok")
}


return `



# ${data.title}

## Table of contents:
* [test](#test)

## Project Description:
${data.description}

## Installation Instructions:
${data.installation}

## Usage:
${data.usage}

## Contributions:
${data.contribution}

## test:
${data.test}

## License:
${data.license}

## Github Username:
${data.username}




`
}

module.exports = generateMarkdown;