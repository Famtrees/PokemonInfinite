// excess values are also not aplicable here unless they are set with type assertion
// exp: {excessVar: 10} as LabeledValue can set the object with that extra key value

// another way is [propName: string]: any essentially the brackets generate 
// a new key with a string and then set it with any type unless it's an excessive val on it's own

interface LabeledValue {
    label: string;
    optional?: number;
    readonly pointer: string,
    arr: ReadonlyArray<string>
}

// the args don't need to be the same name, just the values here
interface FuncInterface {
    (str: string): boolean
}
let somefunc: FuncInterface
somefunc = function(str: string){
    return true
}

// essentially an array here using the number to be a key,
// assign and get values using the number for key
interface FunArray {
    [index: number]: FuncInterface
}

// very much like protocols where I can use an interface to essentially create 
// two different class implementing that class and then using a function factory 
// to build the objects from them

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
}

class AnalogClock implements ClockInterface {
constructor(h: number, m: number) {}
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);



// example of inheritence or extends
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


// hybrid types of interfaces
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}
  
function getCounter(): Counter {
    let counter = function (start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}
  
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;


// function rest parameters use the ... to infer upon extra args sent to that function 
//sets it to optional ...names: string[]


// use this: void for function calls using this


const printLabel = (labelObj: LabeledValue) => {
    console.log(labelObj.label);    
}

function getValue(value: number): number {  
    return 9
}

function getLabelObj(value: number, optional?: number): LabeledValue {  
    return {
        label: `something ${optional && "was set"}`,
        pointer: "hello world",
        arr: ["", "", ""], // this cannot be assigned to a mutable array! 
                            //unless you use 'as string[]' type assertion
        optional: value > 9 ? 22: undefined
    }
}

export default {
    printLabel
}




interface NumberDictionary {
    [index: string]: number | string;
    length: number; // ok, length is a number
    name: string; // error, the type of 'name' is not a subtype of the indexer
  }