// Write your solution here!

// function beforeEach (){
    //       cats.length = 0;

    //       cats.push('Milo', 'Otis', 'Garfield');
    //     }
    // function destructivelyAppendCat(name){
        //     cats.push("Ralph")
//     return cats
// }
// function destructivelyPrependCat(name){
    //     cats.unshift("Bob")
    //     return cats
    // }
    // function destructivelyRemoveLastCat(){
        //     cats.pop()
        //     return cats
        // }
        // function destructivelyRemoveFirstCat(){
            //     cats.shift()
            //     return cats
            // }
            // function appendCat(name){
                //     const appendCats=[...cats,"Broom"]
                //     return appendCats
                // }
                // function prependCat(name){
                    //     const prependCats=["Arnold",...cats]
                    //     return prependCats
                    // }
                    // function removeLastCat(){
                        //     const removeCats= cats.slice(0,cats.length-1);
                        //     return removeCats;
                        // }
                        // function removeFirstCat(){
                            //     const removeFirstCats=cats.slice(1)
                            //     return removeFirstCats
                            // }
                            
 let cats =["Milo", "Otis", "Garfield"]
 function beforeEach(){
    cats.length=0
    cats.push('Milo', 'Otis', 'Garfield')
 }
 function destructivelyAppendCat(name){
    return cats.push(name)
    
 }
 
 function destructivelyPrependCat(name){
    return cats.unshift(name)
    
 }
 
 function destructivelyRemoveLastCat(){
    return cats.pop()

 }
 function destructivelyRemoveFirstCat(){
    return cats.shift()
    
 }

 function appendCat(name) {
    return [...cats, name];
}

// Function to prepend a cat to the cats array and return a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, ...cats];
}

// Function to remove the last cat in the cats array and return a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, -1);
}

// Function to remove the first cat from the cats array and return a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);
}
 