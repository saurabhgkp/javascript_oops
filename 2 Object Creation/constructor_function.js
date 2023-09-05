//constructor_function
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log(`circle radius ${this.radius}`)
    }

}

const circle1 = new Circle(2)
circle1.draw();