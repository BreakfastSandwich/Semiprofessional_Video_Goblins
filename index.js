const inquirer = require('inquirer');
const fs = require('fs');

class SVG {
    constructor(shapeColor, shape, text, textColor) {
        this.shape = shape
        this.shapeColor = shapeColor
        this.text = text
        this.textColor = textColor

    }

    logo(shapeColor, text, textColor) {
        let svg = `<svg height="200" width="300" fill="${this.shapeColor}">
    ${this.shape}
           <text x="100" y="115" fill="${this.textColor}" font-weight="bold" font-size="70px">${this.text}</text>
  </svg>`

        fs.writeFile('logo.svg', svg, (error) =>
            error ? console.error(error) : console.log('sucess')
        );

    }



}




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

        let text = data.chars
        let textColor = data.charColor
        let shape = data.shape
        let shapeColor = data.shapeColor


        console.log(text)

        if (text.length >= 1 && text.length <= 3) {

            switch (shape) {
                case 'Circle':
                    console.log('circle')

                    let circle = '<circle cx="150" cy="100" r="100"/>'

                    let SVGCircle = new SVG(shapeColor, circle, text, textColor)
                    console.log(SVGCircle)

                    SVGCircle.logo()

                    break;

                case 'Square':
                    console.log('Square')

                    let square = '<rect x="10" y="10" width="200" height="200" />'

                    let SVGSquare = new SVG(shapeColor, square, text, textColor)
                    console.log(SVGSquare)

                    SVGSquare.logo()

                    break;

                case 'Triangle':
                    console.log('Triangle')

                    let triangle = '<polygon points="150,0 0,200 300,200"/>'

                    let SVGTriangle = new SVG(shapeColor, triangle, text, textColor)
                    console.log(SVGTriangle)

                    SVGTriangle.logo()

                    break;

                default:

            }



        } else {

            console.log('Text length must be between 1 and 3 characters')
        }


    });