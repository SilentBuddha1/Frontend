// Output
const shape = {
    radius: 10,
    diameter() { return this.radius * 2; },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // Normal function this refers to the shape object 
console.log(shape.perimeter()); // Arrow function this refers to the global or window object

