abstract class Shape {
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [
  new Circle(5),         
  new Rectangle(4, 6),   
];

for (const shape of shapes) {
  console.log("Maydon:", shape.getArea());
}

