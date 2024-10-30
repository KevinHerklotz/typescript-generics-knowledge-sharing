// ############
// In TypeScript:
// ############

// Set
const setOfNumbers = new Set()

setOfNumbers.add(1)
setOfNumbers.add("foo") // we want this to fail





// map()
const arrayOfNumbers = [1, 2, 3]
const arrayOfStrings = arrayOfNumbers.map((x) => x + 1)






// Type helper
// Promise
type FromApi = Promise<string>
type Result = Awaited<FromApi>

// Return type

type FunctionThatReturnsString = () => string
// type MyFunctionReturnType = ReturnType<FunctionThatReturnsString>
// type WrongReturnType = ReturnType<number>





// ############
// In React:
// ############

const MyComponent = () => {
  const [count, setCount] = React.useState(null)

  return (
    <button onClick={() => setCount(42)}>
      set count to 42
    </button>
  )
}







