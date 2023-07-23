/*
For this array task, we provide you with a starting array listing the names of some birds.

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ]

Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
Make a new array from this one, called eBirds, that contains only birds from the 
original array whose names begin with the letter "E". Note that startsWith() is a 
great way to check whether a string starts with a given character.
If it works, you should see "Emus,Egrets" appear in the page.
*/

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ]
let eaglesIdex = birds.indexOf('Eagles')
birds.splice(eaglesIdex, 1)
var eBirds = []
for(i = 0; i < birds.length; i++){
    if(birds[i].startsWith('E')){
        eBirds.push(birds[i])
    }
}
console.log(eBirds)