"use strict";
let id = 5;
// console.log("Id: "+ id);
let company = "Onthecard";
let isLocated = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
// ids.push("Hello")
let arr = [1, true, "hello"];
// Tuple
let person = [1, "Phuong", true];
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union
let pid;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 10] = "Up";
    Direction1[Direction1["Down"] = 11] = "Down";
    Direction1[Direction1["Left"] = 12] = "Left";
    Direction1[Direction1["Right"] = 13] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "Phuong"
};
// Type Assertion: 
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
customerId = 1;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Phuong"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes 
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return this.name + " is now registered";
    }
}
const brad = new Person(1, "brad");
const mike = new Person(2, "Mike");
// console.log(brad, mike);
// console.log(brad.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "ABC", "Dev");
// console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["a", "b", "c", "d"]);
console.log(numArray);
console.log(strArray);
