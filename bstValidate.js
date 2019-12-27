//Has BST validator and Traversal Techniques.
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
                }else {
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
            }else {
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
            }else {
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
                    }else {
                        currentNode.value = null;
                    }
                }else if(parentNode.left === currentNode){
                    parentNode.left = currentNode.left !== null ? currentNode.left:currentNode.right;
                }else if(parentNode.right === currentNode){
                    parentNode.right = currentNode.right !== null ?currentNode.left:currentNode.right;
                }
                break;
            }
        }
        return this;
    }
}

function validateBST(tree){
    return validateBSTHelper(tree,-Infinity,Infinity);
}

function validateBSTHelper(tree,minValue,maxValue){
    if(tree === null){
        return true;
    }
    if(tree.value < minValue || tree.value > maxValue){
        return false;
    }
    const leftIsValid = validateBSTHelper(tree.left,minValue,tree.value);
    const rightIsValid = validateBSTHelper(tree.right,tree.value,maxValue);
    return leftIsValid && rightIsValid;
}

function inOrderTraverse(tree,array){
    if(tree !== null){
        inOrderTraverse(tree.left,array);
        array.push(tree.value);
        inOrderTraverse(tree.right,array);
    }
    return array;
}

function preOrderTraverse(tree,array){
    if(tree !== null){
        array.push(tree.value);
        preOrderTraverse(tree.left,array);
    }
    return array;
}

function postOrderTraverse(tree,array){
    if(tree !== null){
        postOrderTraverse(tree.left,array);
        postOrderTraverse(tree.right,array);
        array.push(tree.value);
    }
    return array;
}