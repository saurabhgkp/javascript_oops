function Circle(radius) {

    this.radius = radius

}

Circle.prototype.draw = function () {
    console.log(`circle radius ${this.radius}`)
}

const circle1 = new Circle(3)

circle1.draw()

