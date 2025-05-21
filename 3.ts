function identity<T>(value: T): T {
  return value;
}

console.log(identity(45));
console.log(identity("string"));
console.log(
  identity({
    name: "Eshmat",
    age: 34,
  })
);

class Stack<T> {
  items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
  get(): void {
    console.log(this.items);
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.get();
console.log(numberStack.pop());
