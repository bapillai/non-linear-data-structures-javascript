//N-Array Tree
class Tree {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
    insertChild(value) {
      const newTree = new Tree(value);
      this.children.push(newTree);
      return newTree;
    }
  
    // Uses a Depth-First Traversal
    static traverse(tree) {
      tree.children.forEach(child => {
        Tree.traverse(child);
      });
    }
  
    contains(searchValue) {
      let result = false;
      Tree.traverse(this, (leaf) => {
        result = result || leaf.value === searchValue;
      });
      return result;
    }
  
    static size(tree) {
      let size = 0;
      Tree.traverse(tree, () => {
        size++;
      });
      return size;
    }
  
    static find(tree, value) {
      let result = false;
      Tree.traverse(tree, (leaf) => {
        if (leaf.value === value) {
          result = leaf;
        }
      });
      return result;
    }
  
    insert(parentTree, value) {
      let leaf = Tree.find(this, parentTree.value);
      if (leaf) {
        leaf.insertChild(value);
      }
      return leaf;
    }
  
    remove(value) {
      if (this.value === value) {
        delete this;
      }
      this.children.forEach((child, index) => {
        if (child.value === value) {
          this.children.splice(index, 1);
        } else {
          child.remove(value);
        }
      });
    }
  
    reorder(node1, node2) {
      const leaf1 = Tree.find(this, node1);
      const leaf2 = Tree.find(this, node2);
  
      leaf1.value = node2;
      leaf2.value = node1;
    }
  }
  
  let myTree = new Tree(1);
  myTree.insertChild(2);
  myTree.insertChild(3);
  myTree.insertChild(4);
  myTree.children[0].insertChild(2.1);
  myTree.children[0].insertChild(2.2);
  myTree.children[0].insertChild(2.3);
  myTree.children[0].children[1].insertChild(2.21);
  myTree.children[0].children[1].insertChild(2.22);
  console.log(myTree);
  console.log(myTree.contains(1));
  console.log(myTree.contains(2));
  console.log("The size is: "+Tree.size(myTree))