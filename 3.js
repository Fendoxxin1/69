"use strict";
function identity(value) {
    return value;
}
console.log(identity(45));
console.log(identity("string"));
console.log(identity({
    name: "Eshmat",
    age: 34,
}));
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    get() {
        console.log(this.items);
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
numberStack.get();
console.log(numberStack.pop());
