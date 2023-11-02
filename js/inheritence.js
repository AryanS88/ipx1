class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating...`);
  }
}
class Dog extends Animal {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
  eat() {
    super.eat();
    console.log(`${this.name} is eating in parent class...`);
  }
}
const ani = new Animal("Appu");
const d = new Dog("Buffy", "golden");
ani.eat();
console.log(`${d.name} is ${d.color} in color`);
d.eat();

// 1. create class and constructor, other methods in it
// 2. make an obj and call it
// 3. make a child class
// 4. fool around, use super

// Super keyword use 1
class Parent {
  sayHello() {
    console.log("Hello from the parent class");
  }
}

class Child extends Parent {
  sayHello() {
    super.sayHello(); // Call the parent class's "sayHello" method.
    console.log("Hello from the child class");
  }
}
const childInstance = new Child();
childInstance.sayHello();

// // super use 2
class Parent2 {
  constructor(name) {
    this.name = name;
  }
}
class Child2 extends Parent2 {
  constructor(name, age) {
    super(name); // Call the parent class constructor to set up the "name" property.
    this.age = age;
  }
}
const child2 = new Child2("John", 10);
// Access properties of the child object
console.log("Child2's name:", child2.name);
console.log("Child2's age:", child2.age);
