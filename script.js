//type node script.js in the terminal to view the console.logs

class Rectangle {
    constructor(paramHeight, paramWidth) {
        this.height = paramHeight;
        this.width = paramWidth;
    }
}

//this is the superclass
class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//this is the subclass
class Child extends Parent {
    constructor(school, name, age) {
        super(name, age);
        this.school = school;
    }
}

const myChild = new Child(`Weaver High`, `Timmy`, `14`);
console.log(myChild);

class Car {
    constructor(engine, make, model) {
        this.engine = engine;
        this.make = make;
        this.model = model;
    }
}

class Engine {
    constructor(name){
        this.name = name;
    }
}

const myCar = new Car(new Engine(`myEngine`), `Acura`, `MDX`);
console.log(myCar);

//classes are syntactic sugar that immediately invoked functional expression (IIFE)
//outside wrapped () and call after (); is what IIFE's the fn
//instead of doing this below we can just write a class
(function () {
    console.log(`I am inside an IIFE`);
})();

(function () {
    height = 5;
    width = 4;
    console.log(width);
})();

//make an instance of class Rectangle
const myObj = new Rectangle();
//this can happen because JS is loosely typed
const otherObj = new Rectangle(4, "My name is Renee"); 
//you can turn on strict mode so the types are important

console.log(myObj);
console.log(otherObj);

otherObj.width = 5;
console.log(otherObj);

//syntax for java, which is to come
// public String myFunc(int age, String name){
//     return name + " is "+ age.toString() + " years old.";
// }

function varTest() {
    var x = 1;

    function insideFunction() {
        var x = 3;
        console.log('third', x);
    }

    {
        var x = 2;
        console.log('first', x);
    }

    console.log('second', x);

    insideFunction();

}
varTest();

function letTest() {
    console.log('----Inside letTest()----');
    let x = 1;

    {
        //token -> expression -> statement -> block
        //token is the smalles piece of code
        //expression resolves to a value
        //statement performs an action
        //block is a grouping of statements
        let x = 2;
        console.log('first', x);
    }

    console.log('second', x);

}

letTest();
  
console.log(`---functional programming---`);
//functional programming can trace its roots to lambda calculus

//arrow functions cannot be hoisted
const myFunc = () => 4;
const otherFunc = () => {};

console.log(typeof otherFunc);
console.log(`call to hoisted function`);
console.log(otherAddTwo(22));

const addTwo = x => x + 2;

console.log('call to arrow fn', addTwo(26));

function otherAddTwo(x) {
    console.log(`This function can be hoisted`);
    return x + 2;
}