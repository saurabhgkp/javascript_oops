//factory_function

function circle(radius) {
    return {
        radius: radius,
        draw: function () {
            console.log(`circle radius ${radius}`)
        }
    }
}
const circle1 = circle(4)
circle1.draw();