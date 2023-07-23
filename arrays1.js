/*
Let's start off with some basic array practice. 
In this task we'd like you to create an array of three items, stored 
inside a variable called myArray. The items can be anything you 
want — how about your favorite foods or bands?

Next, modify the first two items in the array using simple bracket notation and assignment. 
Then add a new item to the beginning of the array.
*/
myArray = ['Uva', 'Maça', 'Melancia']
myArray[0] = 'Abacaxi'
myArray[1] = 'Laranja'
myArray.unshift('Morango')
console.log(myArray)