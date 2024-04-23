
const name1 = { 
    firstName: "Super",
    lastName: "Section",
    printFullname: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

name1.printFullname();


const name2 = {
    firstName: "Soumo",
    lastName: "Sarkar",
}


/* Function borrowing */
name1.printFullname.call(name2);  // when `name1` contains the method



const printFullname = function () {
    console.log(this.firstName + " " + this.lastName);
}

const printUserInfo = function (homeTown, state) {
  console.log(this.firstName + " " + this.lastName + " from " + homeTown + ", " + state);
};


/* call method */
printFullname.call(name1);

printUserInfo.call(name2, "Kolkata", "West Bengal");


/* apply method */
printUserInfo.apply(name1, ["New York", "US"]);


/* bind method */
const printTheName = printUserInfo.bind(name1, "Paris", "France");

console.log(printTheName);
printTheName();


/**
 * Difference between call and bind
 * 
 * Bind gives a copy and a function which can be invoked later on, 
 * but Call directly returns the output from the function when it is mentioned to be called
 * 
 */