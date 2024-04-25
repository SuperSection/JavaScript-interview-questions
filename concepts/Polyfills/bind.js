const somename = {
    firstName: "Monkey",
    lastName: "Luffy"
}

const printName = function(greet, middleName) {
    console.log(greet + " " + this.firstName + " " + middleName + " " + this.lastName);
}

const printTheName = printName.bind(somename, "Hey");
printTheName("D");



Function.prototype.myCustomBind = function(context, ...args) {
    const fn = this;
    return function(...args2) {
        fn.call(context, ...args, ...args2);
    }
}

const printTheNameCustomWay = printName.myCustomBind(somename, "Hi");
printTheNameCustomWay("D");
