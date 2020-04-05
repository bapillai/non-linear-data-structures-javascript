//Find a value that is closest to the BST,if 13 is in the BST and the value given is 12 then thats the closest match.
//Time Complexity:O(log(n))
//Space Time Complexity:O(1) if the solution is done iteratively.

class BST{
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
    getMinValue(){
      let currentNode = this;
      while(currentNode.left !== null){
        currentNode = currentNode.left;
      }
      return currentNode.value;
    }
    getMaxValue(){
      let currentNode = this;
      while(currentNode.right !== null){
        currentNode = currentNode.right;
      }
      return currentNode.value;
    }
    insert(value){
      let currentNode = this;
      while(true){
        if(value < currentNode.value){
          if(currentNode.left === null){
            currentNode.left = new BST(value);
            break;
          }else{
            currentNode = currentNode.left;
          }
        }else {
          if(currentNode.right === null){
            currentNode.right = new BST(value);
            break;
          }else{
            currentNode = currentNode.right;
          }
        }
      }
      return this;
    }
    contains(value){
      let currentNode = this;
      while(currentNode !== null){
        if(value < currentNode.value){
          currentNode = currentNode.left;
        }else if(value > currentNode.value){
          currentNode = currentNode.right;
        }else{
          return true;
        }
      }
      return false;
    }
    remove(value, parentNode=null){
      let currentNode = this;
      while(currentNode !== null){
        if(value < currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.left;
        }else if(value > currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.right;
        }else{
          if(currentNode.left !== null && currentNode.right !== null){
            currentNode.value = currentNode.right.getMinValue();
            currentNode.right.remove(currentNode.value,currentNode);
          }else if(parentNode === null){
            if(currentNode.left !== null){
              currentNode.value = currentNode.left.value;
              currentNode.right = currentNode.left.right;
              currentNode.left = currentNode.left.left;
            }else if(currentNode.right !== null){
              currentNode.value = currentNode.right.value;
              currentNode.left = currentNode.right.left;
              currentNode.right = currentNode.right.right;
            }else{
              currentNode.value = null;
            }
          }else if(parentNode.left === currentNode){
            parentNode.left = currentNode.left !== null? currentNode.left:currentNode.right;
          }else if(parentNode.right === currentNode){
            parentNode.right = currentNode.right !== null?currentNode.left:currentNode.right;
          }
          break;
        }
      }
      return this;
    }
  }
  
  // Iteratively
  function findClosestValueInBst(tree,target){
    return findClosestValueInBstHelper(tree,target,Infinity);
  }
  
  function findClosestValueInBstHelper(tree,target,closest){
    let currentNode = tree;
    while(currentNode !== null){
      if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
        closest = currentNode.value;
      }
      if(target < currentNode.value){
        currentNode = currentNode.left;
      } else if(target > currentNode.value){
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
    return closest;
  }
  
  const test = new BST(100)
    .insert(5)
    .insert(15)
    .insert(5)
    .insert(2)
    .insert(1)
    .insert(22)
    .insert(1)
    .insert(1)
    .insert(3)
    .insert(1)
    .insert(1)
    .insert(502)
    .insert(55000)
    .insert(204)
    .insert(205)
    .insert(207)
    .insert(206)
    .insert(208)
    .insert(203)
    .insert(-51)
    .insert(-403)
    .insert(1001)
    .insert(57)
    .insert(60)
    .insert(4500);
  
  console.log(findClosestValueInBst(test, 59))