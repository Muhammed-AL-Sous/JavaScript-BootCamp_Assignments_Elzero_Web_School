class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car Is Running Now`;
  }
  stop() {
    return `Car Is Stopped`;
  }
  data(numberOfCar) {
    return `Car ${numberOfCar} Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`;
  }
}

let carOne = new Car("MG", "2022", 420000);
let carTwo = new Car("Marcedes", "2020", 600000);
let carThree = new Car("BMW", "2021", 500000);

console.log(carOne.data("One"));
console.log(carOne.run());
