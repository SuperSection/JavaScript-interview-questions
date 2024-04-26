"use strict"


/* `this` in global space */
console.log(this);  // globalObject - window, global


/* `this` inside a function */
function anyFunctionInGlobalSpace() {
    /**
     * here `this` depends on strict or non-strict mode
     * 
     * in strict mode `this` keyword will be replaced with undefined
     * in non-strict mode `this` keyword will be replaced with globalObject
     */
    console.log(this);
}

anyFunctionInGlobalSpace();


/**
 * `this substitution` - inside non-strict mode
 * 
 * If the value of `this` keyword is undefined or null 
 * `this` keyword will be replaced with globalObject ONLY in non-strict mode
 * 
 */


/* `this` keyword value depends on HOW THE FUNCTION IS CALLED (if with reference of any globalObject) */
// window.anyFunctionInGlobalSpace();


/* `this` inside a function */
const crewCaptain = {
    name: "Luffy",
    age: 17,
    greet: function() {
        console.log(`Hey ${this.name}! You are only ${this.age} years old.`);
    }
}

crewCaptain.greet();

const firstCrewMember = {
    name: "Zoro",
    age: 19,
}

// call, apply, bind methods (sharing method)
crewCaptain.greet.call(firstCrewMember);


/**
 * `this` inside arrow function
 * 
 * arrow function does not provide its own `this` binding
 * it retains the `this` value of the enclosing lexical context
 * This behavior makes arrow functions particularly useful for callbacks and preserving context.
 * 
 */
const obj = {
  a: 10,
  b: 20,
  sum: () => {
    console.log(this.a + this.b);
    console.log(this);
  },
};

obj.sum();


/* `this` inside nested arrow function*/
const obj2 = {
  x: 10,
  y: 20,
  myFunc: function () {
    console.log(this);
    const sum = () => {
      console.log(this.x + this.y);
      console.log(this);
    };
    sum();
  },
};

obj2.myFunc();



/**
 * `this` inside DOM elements
 * referenve to the HTML element that triggered the event
 * 
 */


/* 
 * `this` inside a class
 * referenve to the class instance
 * 
 */