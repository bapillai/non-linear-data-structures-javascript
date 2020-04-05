class BinaryTree {
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSum(root){
    let sums = [];
    calacultatBranchSum(root,0,sums);
    return sums;
  }
  
  function calacultatBranchSum(node, runningSum, sums){
    if(!node){
      return;
    }
    let newRunningSum = runningSum + node.value;
    if(!node.left && !node.right){
      sums.push(newRunningSum);
      return;
    } else {
      calacultatBranchSum(node.left,newRunningSum,sums);
      calacultatBranchSum(node.right,newRunningSum,sums);
    }
  }
  
  
  branchSum(1);