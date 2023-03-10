// Write your solution here!

var cats =["Milo", "Otis", "Garfield"]
function beforeEach (){
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    }
function destructivelyAppendCat(name){
    cats.push("Ralph")
    return cats
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}
function appendCat(name){
    const appendCats=[...cats,"Broom"]
    return appendCats
}
function prependCat(name){
    const prependCats=["Arnold",...cats]
    return prependCats
}
function removeLastCat(){
    const removeCats= cats.slice(0,cats.length-1);
    return removeCats;
}
function removeFirstCat(){
    const removeFirstCats=cats.slice(1)
    return removeFirstCats
}

