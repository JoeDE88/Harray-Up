
export const modelLevel={
    "id": 1,
    "introduction": "If you see this level is because database is not accesible, anyway, I give you an example  for change this Array",
    "example": "output = [1,2,3,4,5,6,7]",
    "instructions": "asign the value ['strawberry','pear','pineapple'] to the output",
    "staticCode":
      `
function changeArray(array) {
// Write your code below this line
output = []
                  
// Write your code above this line
return output
}

let fruits = ["banana", "banana"]
changeArray(fruits)
`,
    "goalArray": '["strawberry","pear","pineapple"]'

  }

const level1={
    "id": 1,
    "introduction": "An array is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key.",
    "example": "array = [1,2,3,4,5]",
    "instructions": "Assign the value ['strawberry','pear','pineapple'] to the output.",
    "staticCode":
      `
function changeArray(array) {
// Write your code below this line
output = []
                  
// Write your code above this line
return output
}

let fruits = ["banana", "banana"]
changeArray(fruits)
`,
    "goalArray": '["strawberry","pear","pineapple"]'
}

const level2={
    "id": 2,
    "introduction": "The push() method of Array adds the specified elements to the end of an array and returns the new length of the array.",
    "example": "array.push('lemon')",
    "instructions": "Add the element grapes to the array.",
    "staticCode":
      `
function changeArray(array) {
// Write your code below this line
output = []
                  
// Write your code above this line
return output
}

let fruits = ['strawberry','pear','pineapple']
changeArray(fruits)
`,
    "goalArray": '["strawberry","pear","pineapple","grapes"]'

}


const level3={
    "id": 3,
    "introduction": "The pop() method of Array removes the last element from an array and returns that element. This method changes the length of the array.",
    "example": "array.pop('lemon')",
    "instructions": "Remove the element mondarine from the array.",
    "staticCode":
      `
function changeArray(array) {
// Write your code below this line
output = []
                  
// Write your code above this line
return output
}

let fruits = ['strawberry','pear','mondarine']
changeArray(fruits)
`,
    "goalArray": '["strawberry","pear"]'

}

  export const levelList=[level1,level2,level3]