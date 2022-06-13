// filter

Array.prototype.newFilter = function(value) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
      if (value(this[i])) {
        array.push(this[i]);
      }
    }
    return array;
  };
  const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.newFilter(x => x % 2 === 0)); 

// find

Array.prototype.newFind = function(value) {
    
    for (let i = 0; i < this.length; i++) {
        if (value(this[i])) {
            return this[i];
        }
      }
    };
    const arr2 = [1,2,3,4,5,6,7,8,9,10];
  console.log(arr2.newFind(x => x % 2 === 0)); 

//   slice

function newSlice(array, one, two) {
    let newArray =[];
  
    if(two===undefined || two > array.length)
      two = array.length;
  
    for (let i = one; i < two; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
  
 console.log(newSlice([1,2,3,4,5,6],2,4));


//  splice

function spliceMethod (array , index , number , arr){
    let array1 = [];   
    for ( let i = index ; i < array.length ; i++){
        if(i < index + number){
            array1 = array[i].pop;
            array[i] = arr;                 
        }     
    }  
    return array;
}
console.log(spliceMethod (["text"  , "world"  , "java" , "Script"] , 0 , 2 , "hello" , "salam"));

// some 
function filterMethod(array){
    let trueFalse = false;
    for ( let i = 0 ; i < array.length ; i++){
        if ( array[i].length > 8 ){
            trueFalse = true;
        } 
    }
    return trueFalse;
}
let newArray = ["hello" , "world" , "javaScript" , "123456"]
console.log(filterMethod(newArray));





