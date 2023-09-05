//object creating using class

class Circle {

    constructor(radius) {
        //inside constructor is proprty and methads called
        this.radius = radius;
        this.move = function () { }

    }

    draw() {
        //prototype 
        console.log(`circle radius ${this.radius}`);
    }
    static run() {
        //static method or utility function {methad and property}
        // not accessable out side
    }

}
const circle1 = new Circle(3)
circle1.draw()
console.log(circle1.radius)
//circle1.run()   not accessable