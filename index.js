//Import the inqurer module.
const inquirer = require(`inquirer`);

// Import file system module.
const fs = require(`fs`);

// Importe module shapes
const {Triangle, Circle, Square} = require(`./lib/shapes`);


function toGenerateSvgContent(answers){
    // const baseSvg = `<svg width="200" height="300" xmlns="http:www.w3.org/2000/svg">`
    let shape;
    switch(answers.shape){
        case 'circle':
                const circle = new Circle(answers.shapeColor, answers.textColor, answers.text);
                // shapeSvg = `<circle cx="100" cy="150" r="80" fill="${answers.color}" />`
                svgLogContent = circle.render();
                break;
            
            case 'square':
                const square = new Square(answers.shapeColor, answers.textColor, answers.text);
                // shapeSvg = `<rect x="25" y="75" width="150" height="150" fill="${answers.color}" />`
                svgLogContent = square.render();
                break;

            case 'triangle':
                // shapeSvg = `<polygon points="100,10 40,290 160,290" fill="${answers.color}" />`;
                const triangle = new Triangle(answers.shapeColor, answers.textColor, answers.text);
                svgLogContent = triangle.render();
                break;
    }
    
    // const textSvg = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${answers.textcolor}">${answers.text}</text>`
        

    return `svgLogContent`;

}    

function writeToFile(filename, data) {
        
    fs.writeFile(filename, data, "utf8", (error) =>  error ? console.error(error) : console.log('Success!'));
}




function init() {
    inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter the text to display, it should not be more than 3 characters:',
                validate: input => input.length <= 3 || 'Text must be 3 characters max',
                
            },
            {
                type: 'input',
                name: 'textcolor',
                message: 'Please enter text color (keyword or hexadecimal): ',
                default: `white`
               
            },
            {
                type: 'list',
                message: 'Please select the shape of the logo: ',
                name: 'shape',
                choices: ['circle', 'square', 'triangle'],
            },

            {
                type: 'input',
                name: 'shape color',
                message: 'Please enter the shape color (keyword or hexadecimal): ',
                default: 'blue'
            }
    ])

            .then(function(answers) {
                const svgContent = toGenerateSvgContent(answers);

            
                writeToFile('logo.svg', svgContent);   

                console.log(answers);
                console.log('Generated logo.svg');
            })

}



//INITIALIZE
init();