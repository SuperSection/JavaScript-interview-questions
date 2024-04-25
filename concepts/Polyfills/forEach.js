const arr = [1, 2, 3, 4, 5];

// Simulate browser incompatilibity

Array.prototype.forEach = null; // erasing the forEach method from the Array prototype


// Implementing own custom forEach
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback) {
        for (let val of this) {
            callback(val, this.indexOf(val));
        }
    }
}


arr.forEach((num, index) => {
    console.log(index, num * 2);
});

