// Collection Functions

const objToArray = (obj)=>{
    return (obj instanceof Array) ? obj.slice() : Object.values(obj)
}

const myEach = (collection, callback) => {
    const array = objToArray(collection)
    for(let i = 0; i < array.length; i++){
        callback(array[i])
    }
    return collection
}
const myMap = (collection, callback) => {
    const array = objToArray(collection)
    const newArray = []
    for(let i=0;i<array.length;i++){
        newArray.push(callback(array[i]))
    }
    return newArray

 }
const myReduce = (collection, callback, acc) => {
    const array = objToArray(collection)
    if(!acc){
        acc = array[0]
        array.shift()
    }

    for(let i=0;i<array.length;i++){
        acc=callback(acc,array[i],array)
    }
    return acc
 }
const myFind = (collection, predicate) => {
    const array = objToArray(collection)
    for(let i=0;i<array.length;i++){
        if(predicate(array[i])){return array[i]}
    }
    
 }
const myFilter = (collection, predicate) => {
    const array=objToArray(collection)
    let returnVals = []
    for(let i=0;i<array.length;i++){
        if(predicate(array[i])){
            returnVals.push(array[i])
        }
    }

    return returnVals

 }
const mySize = (collection) => {
    const array=objToArray(collection)
    return array.length
 }

// Array Functions
const myFirst = (array, n) => {
    let returnVals = []
    if(!n){return array[0]}
    for(let i=0;i<n;i++){returnVals.push(array[i])}
    return returnVals
 }
const myLast = (array, n) => {
    if(!n){return array[array.length-1]}
    return array.slice(array.length-n, array.length)
 }


//Object functions
const myKeys = (obj) => {
    let keys = []
    for(let key in obj){keys.push(key)}
    return keys
 }
const myValues = (obj) => {
    let values = []
    for(let key in obj){values.push(obj[key])}
    return values
 }