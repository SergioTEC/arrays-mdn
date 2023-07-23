/*
Now let's move on to another task. Here you are provided with a string to work with. 
We'd like you to:

Convert the string into an array, removing the + characters in the process. 
Save the result in a variable called myArray.
Store the length of the array in a variable called arrayLength.
Store the last item in the array in a variable called lastItem.
*/
let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri'
let myArray = myString.split('+')
let arrayLength = myArray.length
let lastItem = myArray[arrayLength - 1]
console.log(`Array: ${myArray}`)
console.log(`Tamanho do Array: ${arrayLength}`)
console.log(`Ultimo item do Array: ${lastItem}`)