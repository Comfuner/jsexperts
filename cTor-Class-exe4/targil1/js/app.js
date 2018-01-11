function Shape(x,y,color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.getDistance = function(){
        return (`
        The distance is: ${Math.sqrt(Math.pow(this.x,this.x) + Math.pow(this.y,this.y))}
        `);
    }
}
Shape.prototype.toString = function() {
    return(`
            x = ${this.x}
            y = ${this.y}
            color = ${this.color}
        `)
};

function Circle(x,y,color,r) {
    Shape.call(this,x,y,color);
    this.r = r;
    const pi = 3.14;
    //
    this.displayPi = function() {return `pi = ${pi}`};
    this.getArea = function() {
        return (`Circle Area is: ${pi*Math.pow(r,r)}`)
    };
    this.getPerimeter = function() {
        return (`Circle Perimeter is: ${2*pi*r}`);
    }
}
// Inhering Shape into Circle and preserving the Circle constructor //
Circle.prototype = Object.create(Shape.prototype);
//Circle.prototype.constructor = Circle;
// overriding Shape toString() //
Circle.prototype.toString = function() {
    return Shape.prototype.toString.call(this) + `     r = ${this.r}`;
};


let c1 = new Circle(10,20,'red',5);
window.alert(c1);
window.alert(c1.getDistance());
window.alert(c1.getArea());
window.alert(c1.getPerimeter());
window.alert(c1.displayPi());




