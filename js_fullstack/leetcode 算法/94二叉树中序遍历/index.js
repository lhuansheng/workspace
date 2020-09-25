Object.prototype.a = 'Object';
Function.prototype.a = 'Function';
function Person(){};       
var child = new Person();
console.log(Person.a); // function
console.log(child.a); // object
console.log(child.__proto__.__proto__.constructor.constructor.constructor);
// child.__proto__ = Person.prototype
// Person.prototype.constructor = function Person(){}; 
// Person.__proto__ = Object.prototype

