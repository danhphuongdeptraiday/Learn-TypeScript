let id: number = 5;

// console.log("Id: "+ id);
let company: string= "Onthecard";
let isLocated: boolean = true;
let x: any = "Hello";

let ids: number[] = [1,2,3,4,5];

// ids.push("Hello")

let arr: any[] = [1,true,"hello"]

// Tuple

let person: [number, string, boolean] = [1,"Phuong", true]

// Tuple Array
let employee: [number, string] []

employee = [
    [1,"Brad"],
    [2,"John"],
    [3,"Jill"],
]

// Union

let pid: string | number 
pid = "22"
 
// Enum
enum Direction1 {
    Up = 10,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
}


// console.log(Direction2.Left);

// Object
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "Phuong"
}

// Type Assertion: 
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number
customerId = 1

// Functions
function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(1,2));


function log(message: string | number) {
    console.log(message);
}

// log(1);

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: "Phuong"
}

// user1.id = 5 // error because readonly

// type Point = number | string
// const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number 
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


interface PersonInterface {
    readonly id: number
    name: string
    age?: number 
}

// Classes 
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return this.name + " is now registered"
    }
}
 
const brad = new Person(1, "brad")
const mike = new Person(2, "Mike")

// console.log(brad, mike);
// console.log(brad.register());

class Employee extends Person {
    position: string
    
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position;
    }
} 

const emp = new Employee(3, "ABC", "Dev");

// console.log(emp.register());

// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}


let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["a", "b", "c", "d"])

console.log(numArray);
console.log(strArray);











