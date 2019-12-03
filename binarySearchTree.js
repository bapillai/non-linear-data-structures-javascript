// Space & Time Complexity is O(log(n)) and O(1) respectively.

class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value){
    let currentNode = this;
    while(true){
      if(value < currentNode.value){
        if(currentNode.left === null){
          currentNode.left = new BinarySearchTree(value);
          break;
        }else{
          currentNode = currentNode.left;
        }
      }else{
        if(currentNode.right === null){
          currentNode.right = new BinarySearchTree(value);
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
  remove(value,parentNode = null){
    let currentNode = this;
    while(currentNode !== null){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      }else if (value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      }else{
        if(currentNode.left !== null && currentNode.right !== null){
          currenNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value,currentNode);
        }else if(parentNode === null){ //root Node
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
          parentNode.left = currentNode.left !== null?currentNode.left:currentNode.right;
        }else if(parentNode.right === currentNode){
          parentNode.right = currentNode.right !== null ? currentNode.left : currentNode.right;
        }
        break;
      }
    }
    return this;
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
}

const treeOne = new BinarySearchTree(10);
treeOne.insert(5);
treeOne.insert(4);
treeOne.insert(6);
treeOne.insert(12);
console.log("tree is: "+treeOne);
console.log("Min node is: ",treeOne.getMinValue());
console.log("Max node is: ",treeOne.getMaxValue());