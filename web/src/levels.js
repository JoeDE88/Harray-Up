
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
    "instructions": "Remove the element tangerine from the array.",
    "staticCode":
      `
function changeArray(array) {
// Write your code below this line
output = []
                  
// Write your code above this line
return output
}

let fruits = ['strawberry','pear','tangerine']
changeArray(fruits)
`,
    "goalArray": '["strawberry","pear"]'

}

const level4={
  "id": 4,
  "introduction": "A way to deal with an array, element by element, it is by trasversing it using a For loop. In the following example you will see how to print every element of an array.",
  "example": "for (let i = 0; i < array.length; i++) {console.log(arrray[i])}",
  "instructions": "Use the For loop to transform every element of the array into a 'cherry'.",
  "staticCode":
    `
function changeArray(array) {
// Write your code below this line
output = []
                
// Write your code above this line
return output
}

let fruits = ['strawberry','pear','tangerine','apple','watermelon','lemon']
changeArray(fruits)
`,
  "goalArray": '["cherry","cherry","cherry","cherry","cherry","cherry"]'

}

const level5={
  "id": 5,
  "introduction": "Use your knowledge about For loop and conditionals to deal with this last exercise.",
  "example": "",
  "instructions": "Use the For loop to transform every 'apple' of the array into a 'pineapple'.",
  "staticCode":
    `
function changeArray(array) {
// Write your code below this line
output = []
                
// Write your code above this line
return output
}

let fruits = ['apple','pear','apple','watermelon','apple','lemon']
changeArray(fruits)
`,
  "goalArray": '["pineapple","pear","pineapple","watermelon","pineapple","lemon"]'

}

  export const levelList=[level1,level2,level3,level4,level5]