const { Triangle, Circle, Square } = require("../lib/shapes");


describe("Square", () => {
    test("render method should return correct SVG string", () => {
  
      const square = new Square(`blue`, `white`, `SVG`);
  
      expect(square.render()).toEqual( `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="200" fill="blue" />
        <text x="50%" y="50%" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`);
  
  
  // the new instance of the class show be an object
  
    });
  
    // the new instance of the class shouw be an object
    test("That this will return an object", () => {
      const square = new Square(`blue`, `white`, `SVG`);
      expect(typeof square).toEqual('object');
    });
  
  });