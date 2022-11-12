// CORREO DEL INSTRUCTOR JS BART = baramirez@deloitte.com

function test(...args) {
    console.log(args);
}

test(1,2,3,4,5,6,7,8,9,10);

function checkAge(age) {
    let newAge = age || 17;
    newAge
    return newAge > 18 ? true : 'Did parents allow you ?';
}

// Función de expresión:
const checkAge2 = function(){
    let newAge = age || 17;
    newAge
    return newAge > 18 ? true : 'Did parents allow you ?'
}

const checkAge3 = (age) => {
    let newAge = age || 17;
    newAge
    return newAge > 18 ? true : 'Did parents allow you ?'
}

console.log(checkAge());

// ForEach
let arr = [1,2,3,4,5];
arr.forEach((value, index, arr) => {
    console.log(value);
    console.log(index);
});

function confirm(msj) {
    return "Confirmado?";
}


let ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => console.log("You agreed"),
    () => console.log("You canceled the execution")
)


// Objects
let user = {
    name: 'John',
    surname: 'Smith',
}
console.log(user);
user.name = 'Pete';
console.log(user);
// delete user.name
console.log(user);


for(const property in user) {
    console.log(property) // Propiedades
    console.log(user[property]) // Values
}

// Checking if obj has propeties
function isEmpty(obj) {
    let arr = Object.keys(user);
    if(arr.length > 0) {
        return true;
    }
    return false;
}
console.log(isEmpty(user))

// Sum of all salaries
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let totalSalary = 0;
for(const property in salaries) {
    totalSalary += salaries[property]
}
console.log(totalSalary);

// Clonar objeto (Object References and copying).
// Usar Object.assign
let user2 = Object.assign({}, user);
let salaries2 = Object.assign({}, salaries);
console.log(user == user2 ? true : false);
console.log(salaries == salaries2 ? true : false);

// Practice with Objects
function instrument(brand, color ) {
    this.brand = brand;
    this.color = color
}
const violin = new instrument("Something", "black");

const changeObj = (obj, brand, color) => {
    obj.brand = brand;
    obj.color = color
}

changeObj(violin, "Marca Shida", "Green");
violin

// Función Calculadora
function Calculator(a, b) {
    this.a = a;
    this.b = b;

    this.read = function() {
        return`Número 1: ${this.a}. Número 2: ${this.b}`;
    }

    this.sum = function() {
        return `El total es: ${this.a + this.b}`;
    }

    this.mul = function() {
        return `La multiplicación es: ${this.a * this.b}`;
    }

    this.resta = function() {
        return `La resta es: ${this.a - this.b}`;
    }
}

const objCal = new Calculator(100,40);
console.log(objCal.read());
console.log(objCal.sum());
console.log(objCal.mul());
console.log(objCal.resta());

// More objects
let obj = {
    sound(){
        console.log(this.m)
    }
}

// obj2 tiene sound en Prototype. 
let obj2 = Object.create(obj);
obj2.m = 'Sol'; // obj2 ya tiene sol normalmente
obj2.sound();


// Clases
class Car {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }

}
let objCar1 = new Car("A", "B");
objCar1


// Clase Calculadora
class CalculadoraWithClass {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }

    read () {
        return`Número 1: ${this.a}. Número 2: ${this.b}`; 
    }

    sum () {
        return `El total es: ${this.a + this.b}`;
    }

    resta () {
        return `La resta es: ${this.a - this.b}`;
    }

    mul () {
        return `La multiplicación es: ${this.a * this.b}`;
    }
}

let objCal2 = new CalculadoraWithClass(100, 20);
console.log(objCal2.read())
console.log(objCal2.sum());
console.log(objCal2.resta());
console.log(objCal2.mul());


