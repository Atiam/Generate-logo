const { default: test } = require('node:test');
const Circle = require('../lib/shapes.js');

describe('Create a Circle class', () => {
    it('should create a Circle class', () => {
        
        const circle = new Circle();

        expect (circle).toBeInstanceOf(Circle)
    })
})

describe('Circle class color test', () => {
    it('should render the correct color', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="100" cy="150" r="80" fill="blue" />');
    })
})

const Square = require('../lib/Square')


describe('Square class color test', () => {
    it('should render the correct color', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="25" y="75" width="150" height="150" fill="blue" />');
    })
})