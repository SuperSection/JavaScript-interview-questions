const inputElement = document.querySelector("input");

const debounce = (func, wait) => {
  let timerId;
  console.log("debounce called");
  console.log(timerId);

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), wait);
    console.log(timerId);
  };
};

const handleAPIcall = (event) => {
  console.log("Calling API: " + event.target.value);
};

const debounceAPIcall = debounce(handleAPIcall, 700);
// console.log(debounceAPIcall);

inputElement.addEventListener("input", debounceAPIcall);
