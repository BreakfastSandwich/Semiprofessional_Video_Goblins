const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'chars',
      message: 'Please input up to three characters',
    },
    {
      type: 'input',
      name: 'charColor',
      message: 'What color would you like the Text?',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like?',
      choices: ['Circle', 'Square', 'Triangle']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color would you like for the Shape?',
    },
    
  ])
  .then((data) => {
    console.log(data);
    let shape = data.shape
    let text = data.text
    let svg;
    
    if (text >= 1 && text <= 3){

    if (shape === 'Circle') {
        svg = `<svg height="200" width="300" fill="${data.shapeColor}">
        <circle cx="150" cy="100" r="100"/>
           <text x="100" y="115" fill="${data.charColor}" font-weight="bold" font-size="70px">${data.chars}</text>
      </svg>`
        console.log('circle')
    } else if(shape === 'Square'){
        svg = `<svg height="200" width="300">
        <rect x="10" y="10" width="200" height="200" fill="${data.shapeColor}"/>
        <text x="50" y="115" ill="${data.charColor}" font-weight="bold" font-size="70px">${data.chars}</text>
      </svg>`
        console.log('svg')
    } else if(shape === 'Triangle'){
        svg = `<svg height="200" width="300">
        <polygon points="150,0 0,200 300,200" fill="${data.shapeColor}" />
        <text x="100" y="150" fill="white" font-weight="bold" font-size="70px">${data.chars}</text>
      </svg>`

        console.log('triangle')
    } else {
        console.log('Shape not found')
    }

} else {
    console.log('Text length must be between 1 and 3 characters')
}

    const logo = svg;

    fs.writeFile('logo.svg', logo, (error) =>
      error ? console.error(error) : console.log('sucess')
    );
  });