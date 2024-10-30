function createArrayPair(first, second) {
  return [first, second];
}

const pair = createArrayPair("hello", 1);
pair[0].toUpperCase();
pair[0].toFixed(); // should fail






// #########################################

const getValueFromObject = (obj, key) => {
  return obj[key];
}

const result = getValueFromObject(
  { a: "some string", b: 42, c: true },
  "a"
)

result.toUpperCase()