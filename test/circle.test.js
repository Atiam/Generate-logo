const { Triangle, Circle, Square } = require("../lib/shapes");

describe("circle", () => {
  test("render method should return correct SVG string", () => {

    const circle = new Circle(`blue`, `white`, `SVG`);

    expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        </svg>`);


// the new instance of the class show be an object

  });

  // the new instance of the class shouw be an object
  test("That this will return an object", () => {
    const circle = new Triangle(`blue`, `white`, `SVG`);
    expect(typeof circle).toEqual('object');
  });

});