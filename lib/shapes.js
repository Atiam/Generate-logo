class Shapes {
    constructor(shapeColor, textColor, text){
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
}

class Circle extends Shapes{
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text)
    }
    render(){
        return `
    <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150", cy="100" fill="${this.shapeColor}" />
        <text x="50%" y="50%" font-size="60" text-anchor-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
    </svg>`
    }
};

class Square extends Shapes{
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text)
    }
    render(){
        return `
    <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <Square x="25", cy="75" with="150" hight="150" fill="${this.shapeColor}" />
        <text x="50%" y="50%" font-size="60" text-anchor-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
};


class Triangle extends Shapes{
    constructor(shapeColor, textColor, text){
        super(shapeColor, textColor, text)
    }
    render(){
        return `
    <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <triangle point="100,10 40,290 160,290" fill="${this.shapeColor}" />
        <text x="50%" y="50%" font-size="60" text-anchor-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
    }
};

// const square = new Square("blue", "blue", "hee");

// console.log(square.render());
module.exports = {Triangle, Circle, Square};
