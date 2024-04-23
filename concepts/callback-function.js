// callback function

function myFunc2(name) {
  console.log("inside myFunc2");
  console.log(`your name is ${name}`);
}

function myFunc(callback) {
  console.log("hello there it's inside myFunc");
  callback("Luffy");
}

myFunc(myFunc2);


/**
 * Two issues that we can face while using callbacks
 * 
 *   i) Callback Hell: 
 *        while passing callbacks, one function as an argument to another function
 *        the code progress can shift from vertical to horizontal level drastically
 *        therefore it can create an unpredictable result or decrease our code level.
 *    It's also known as 'Pyramid of Doom'.
 * 
 *  ii) Inversion of Control:
 *        as a result of passing our code, function as an argument to other function
 *        of which we could have no idea about, how or will it actually handle the passed function properly or not
 *        this can lead to very unwanted or risky outcome as we lose the control over that code 
 */
