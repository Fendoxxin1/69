"use strict";
class Car {
    constructor(b, m, y) {
        this.brand = b;
        this.model = m;
        this.year = y;
    }
    start() {
        console.log(`${this.model} ishga tushdi🚀`);
    }
}
const bmw = new Car("BMW", "iX M60", 2020);
const tesla = new Car("Tesla", "x3 M60", 2018);
const BYD = new Car("BYD", "BYD Dolphin", 2018);
bmw.start();
tesla.start();
BYD.start();
