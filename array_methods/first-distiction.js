marks = [50,60,77,81,68]

distinction = marks.find((mark)=> mark>80)
indexOfDistinction  =  marks.findIndex((mark)=> mark>80)
console.log (`The first distinction is found at index ${indexOfDistinction} and is ${distinction}`)