/*=============== IS COLLECTION ARRAY OR OBJECT ================*/
function standardizeInput(collection){
    return (collection instanceof Array) ? collection.slice() : Object.values(collection)
}

/*=============== FOR EACH ================*/

function myEach(collection, callback) { 
const newCollection = standardizeInput(collection);
    for (let i = 0; i < newCollection.length; i++)
      //for(let item of collection) {
          callback(newCollection[i])
          return(collection)   
}

/*================= MAP ==================*/

function myMap(collection, callback){
  const mappedCollection = standardizeInput(collection);
  const mapOfCollection = []
    for (let i = 0; i < mappedCollection.length; i++){
     //callback(mappedCollection[i])
      mapOfCollection.push(callback(mappedCollection[i]))
    }
      return(mapOfCollection)
     //return mapOfCollection.push(mappedCollection)
  }

/*================= REDUCE ==================*/

function myReduce(collection, callback, acc){
    let newCollection = standardizeInput(collection)
      if(!acc) {
      acc = 1;
      for (let i = 1; i < newCollection.length; i++){
     acc = callback(acc, newCollection[i], newCollection)
     
    } 
   } else {
    for (let i = 0; i < newCollection.length; i++){
      acc = callback(acc, newCollection[i], newCollection) 
    }
  }
      //console.log(acc)
      return acc
}


function myFind(collection, predicate) {
let newCollection = standardizeInput(collection)
    for (let i = 0; i < newCollection.length; i++) {
   //console.log(newCollection[i]);
    if (predicate(newCollection[i])) {
    //console.log(newCollection[i]);
    return newCollection[i]
    }
  }
}

/*================= FILTER ===================*/

function myFilter(collection, predicate){
let newCollection = standardizeInput(collection)
console.log('this is the standardizedInput:', newCollection)
let filteredList = []
  for (let i = 0; i < newCollection.length; i++) {
    if (predicate(newCollection[i])) {
    filteredList.push(newCollection[i])
    }
  }
   console.log(filteredList)
   return filteredList
}
  
   
/*================= FIND LENGTH ===================*/
function mySize(collection){
  let newCollection = standardizeInput(collection)
  return newCollection.length
}

/*####################################### WORKING WITH ARRAYS #######################################*/
/*================= FILTER ===================*/

function myFirst(array, n){
  for (let i = 0; i < array.length; i++) {
    if(!n){
      //console.log(array[i])
      return array[0]
      } else {
      //console.log(array.slice(0,n))
      return (array.slice(0,n))
     
    }
  }
}




function myLast(array, n){
  for (let i = 0; i < array.length; i++) {
    if(!n){
      //console.log(array.slice(-1)[i])
      return array.slice(-1)[i]
    } else {
      //console.log(array.slice(-n))
      return (array.slice(-n))
    }
  }
}

//*BONUS* function mySortBy(array, callback){}
//*BONUS* function myFlatten(array, [shallow], newArr=[])

/*####################################### WORKING WITH OBJECTS #######################################*/
function myKeys(object){
  //console.log (Object.keys(object))
  return Object.keys(object)
  }


function myValues(object){
  //console.log (Object.values(object))
  return Object.values(object)

}
