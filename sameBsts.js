//An array of integers is said to represent the BST obtained by inserting each integer in the array(from left to right) in the BST.Write a function that takes in two arrays of integers and returns a boolean representing whether or not these arrays represent the same BST.Note that you are not allowed to construct any BST in your code.
//Just because the values are the same doesnt mean they will both have the same BST's.
//eg Array 1: [10,5,8.12.94,81,5,2,11]
//eg Array 2: [10,8,5,15,2,12,11,94,81]
//These two arrays have the same BST but we make a minor change like changing the order in the 2nd array between 1st and 2nd elements,ie,
// [8,10,5,15,2,12,11,94,81]
//Then this becomes two different BST's due to change in the root node.

function sameBSTs(arrayOne,arrayTwo){
    if(arrayOne.length === 0 && arrayTwo.length === 0){
      return true;
    }
    if(arrayOne[0] !== arrayTwo[0]){
      return false;
    }
    if(arrayOne.length !== arrayTwo.length){
      return false;
    }
    let leftOne = getSmaller(arrayOne);
    let leftTwo = getSmaller(arrayTwo);
    let rightOne = getBiggerOrEqual(arrayOne);
    let rightTwo = getBiggerOrEqual(arrayTwo);
    return sameBSTs(leftOne,leftTwo) && sameBSTs(rightOne,rightTwo);
  }
  
  function getSmaller(array){
    let smaller = [];
    for(let i=1;i<array.length;i++){
      if(array[i] < array[0]){
        smaller.push(array[i]);
      }
    }
    return smaller;
  }
  
  function getBiggerOrEqual(array){
    let biggerOrEqual = [];
    for(let i=1;i<array.length;i++){
      if(array[i] > array[0]){
         biggerOrEqual.push(array[i]);
      }
    }
    return biggerOrEqual;
  }
  
  console.log(sameBSTs([7, 6, 5, 4, 3, 2, 1],[7, 6, 5, 4, 3, 2, 1]));
  console.log(sameBSTs([10, 15, 8, 12, 94, 81, 5, 2],[10, 8, 5, 15, 2, 12, 94, 81]));