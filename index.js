const prompt = require('inquirer').createPromptModule()
const fs = require('fs')
const axios = require('axios')

const questions = [
  'What is your GitHub username?:',
  'What is the title of the project?',
  'Please add a description of your project:',
  'Table of Contents:',
  'Installation:',
  'Usage:',
  'License:',
  'Contributing:',
  'Tests:'
]

function init() {

  prompt([
    {
      type: 'input',
      name: 'username',
      message: questions[0]
    },
    {
      type: 'input',
      name: 'title',
      message: questions[1]
    },
    {
    type: 'input',
    name: 'description',
    message: questions[2]
    },
    {
      type: 'input',
      name: 'contents',
      message: questions[3]
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[4]
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[5]
    },
    {
      type: 'input',
      name: 'license',
      message: questions[6]
    },
    {
      type: 'input',
      name: 'contributing',
      message: questions[7]
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[8]
    }
  ])
  .then(response => {
    // console.log(response)
    let input = {
      username: response.username,
      title: response.title,
      description: response.description,
      toc: response.toc,
      installation: response.installation,
      usage: response.usage,
      license: response.license,
      contributing: response.contributing,
      tests: response.tests
    }



  })
}

function writeToFile(fileName, data) {
}



init();
