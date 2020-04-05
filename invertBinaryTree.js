function invertBinaryTree(tree){
    let queue = [tree];
    while(queue.length){
      let current = queue.shift();
      if(current === null){
        continue;
      }
      swapRightAndLeft(current);
      queue.push(current.left);
      queue.push(current.right);
    }
  }
  
  function swapRightAndLeft(tree){
    let left = tree.left;
    tree.left = tree.right;
    tree.right = left;
  }