const sayHello  = function () {
  console.log("Hello, world");
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

sayHello();

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);