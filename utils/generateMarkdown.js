function generateMarkdown(data) {
  return `
# ${data.username},
# ${data.title},
# ${data.description},
# ${data.toc},
# ${data.installation},
# ${data.usage},
# ${data.license},
# ${data.contributing},
# ${data.tests}
`
}

module.exports = generateMarkdown;
