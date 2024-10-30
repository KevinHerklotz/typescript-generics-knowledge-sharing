// #####################
// arrow function:
// #####################

const convertToArray = (value) => {
  return [value];
}

const newStringArray = convertToArray("hello");
newStringArray[0].toUpperCase();
// const newNumberArray = convertToArray(1);
// newNumberArray[0].toFixed();
























// #####################
// traditional function:
// #####################
function getFirstElement(array) {
  return array[0];
}

const numbers = [1, 2, 3];
const strings = ["a", "b", "c"];

const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);
firstNumber.toFixed();
firstString.toUpperCase();























// #####################
// doesn't need to map to the runtime argument:
// #####################

const fetchData = <T>(url: string): Promise<T> => {
  return new Promise((resolve) => {
    // do network request
    resolve({} as T);
  });
}

const data = await fetchData("https://example.com")

























// this is only here to allow top level awaits:
export {}