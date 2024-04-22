/* 'this' keyword Implicit binding */

function greeting(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old!`);
  };
}

const ironman = {
  name: "Tony Stark",
  age: 32,
};

const captain = {
  name: "Steve Roger",
  age: 65,
};

greeting(ironman);
greeting(captain);

ironman.logMessage();
captain.logMessage();
