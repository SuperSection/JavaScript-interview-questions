// a nested object
const userInfo = {
  name: "Soumo Sarkar",
  age: 18,
  accounts: {
    linkedIn: {
      ac1: "as student",
      ac2: {
        company: {
          name: "Super Section",
          role: "CEO",
        },
      },
    },
    paglirMon: {
        "love you": "Misty Pagli Shona"
    }
  },
};


// only top level properties gets copied but others levels
const shallowCopy1 = { ...userInfo };
const shallowCopy2 = Object.assign({}, originalObject);


// easy and straight forward approach to make Deep Copy of any object
const deepCopiedObj = JSON.parse(JSON.stringify(userInfo));


// Recursive Function to implement Deep Copy
function makeDeepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    let copiedVal = Array.isArray(obj) ? [] : {};

    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
    }

    return copiedVal;
}



const obj2 = makeDeepCopy(userInfo);

obj2.accounts.linkedIn.ac2.company.name = "Tomar amar bhalobasha";


console.log(userInfo.accounts.linkedIn.ac2);
console.log(obj2.accounts.linkedIn.ac2);
