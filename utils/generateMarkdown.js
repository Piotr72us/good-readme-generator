
function generateMarkdown(data) {

    // console.log(`# ${data.title}`)

    return `# ${data.title}
    #### Welcome to ${data.name}'s page!

    ## Usage
        - readme app for developers
        - my age: ${data.age}
        - other info
    `;
}

module.exports = generateMarkdown;