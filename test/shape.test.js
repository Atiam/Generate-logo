const { Triangle, Circle, Square } = require('../lib/Shape');

describe('Triangle', () => {
    test('render method should return correct SVG string', () => {
      const triangle = new Triangle(`blue`, `white`, `SVG`);
      expect(triangle.render()).toEqual(`
    <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <triangle point="100,10 40,290 160,290" fill="blue" />
        <text x="50%" y="50%" font-size="60" text-anchor-anchor="middle" fill="white">SVG</text>
    </svg>`

      );
    });
  });
  
  describe('Circle', () => {
    test('render method should return correct SVG string', () => {
      const circle = new Circle(`blue`, `white`, `SVG`);
      expect(circle.render()).toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150", cy="100" fill="blue" />
        <text x="50%" y="50%" font-size="60" text-anchor-anchor="middle" fill="white">SVG</text>
    </svg>`
      );
    });
  });
  
  describe('Square', () => {
    test('render method should return correct SVG string', () => {
      const square = new Square('green');
      expect(square.render()).toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
      <Square x="25", cy="75" with="150" hight="150" fill="blue" />
      <text x="50%" y="50%" font-size="60" text-anchor-anchor="middle" fill="white">SVG</text>
  </svg>`);
    });
  });
  