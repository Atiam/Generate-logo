const { Triangle, Circle, Square } = require("../lib/shapes");

describe("Triangle", () => {
  test("render method should return correct SVG string", () => {

    const triangle = new Triangle(`blue`, `white`, `SVG`);

    expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill="blue" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
    </svg>`);



  });

  // the new instance of the class show be an object
  test("That this will return an object", () => {
    const triangle = new Triangle(`blue`, `white`, `SVG`);
    expect(typeof triangle).toEqual('object');
  });

});

// describe("Circle", () => {
//   test("render method should return correct SVG string", () => {
//     const circle = new Circle(`blue`, `white`, `SVG`);
//     expect(circle.render())
//       .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
//       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
//   </svg>`);
//   });
// });

// describe("Square", () => {
//   test("render method should return correct SVG string", () => {
//     const square = new Square("green");
//     expect(square.render())
//       .toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
//       <Square x="25", cy="75" with="150" hight="150" fill="${this.shapeColor}" />
//       <text x="50%" y="50%" font-size="60" text-anchor-anchor="middle" fill="${this.textColor}">${this.text}</text>
//   </svg>`);
//   });
// });
