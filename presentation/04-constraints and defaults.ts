// ############
// Constraints:
// ############

type Animal = {
  name: string
}

const logAnimalName = <T>(animal: T) => {
  console.log(animal.name)
}

const mauzi = {
  name: "Mauzi",
  legs: 4
}

const rock = {
  surface: "rough"
}

logAnimalName(mauzi)
logAnimalName(rock) // should fail




// ############
// Defaults:
// ############


type ApiResponse<T> = {
  data: T
  statusCode: number
  error: null
  timestamp: number
}

type DefaultApiResponse = ApiResponse

