//Tree is another type of trees
//Binary Heap=>Min and Max Heap
//Max Binary Heap=>Parent nodes are always larger than child nodes
//Min Binary Heap => Parent nodes are always smaller than child nodes
//No Order,ie,left is smaller than right sort of relationship in a binary heap.
//Each node has a maximum of two nodes.
//Left child are always filled out first

class MaxBinaryHeap{
    constructor(){
      this.values = [];
    }
    insert(element){
      //Add it to the end and bubble it up to the final position
      this.values.push(element);
      this.bubbleUp();
    }
    bubbleUp(){
      let index = this.values.length - 1;
      const element = this.values[index];
      while(index > 0){
        let parentIndex = Math.floor((index - 1)/2);
        let parent = this.values[parentIndex];
        if(element <= parent){
          break;
        } else {
          this.values[parentIndex] = element;
          this.values[index] = parent;
          index = parentIndex;
        }
      }
    }
    extractMax(){
      const maxElt = this.values[0];
      const lastElt = this.values.pop();
      if(this.values.length > 0){
        this.values[0] = lastElt;
        this.heapAdjust();
      }
      return maxElt;
    }
    heapAdjust(){
      let index = 0;
      const arrLen = this.values.length;
      const element = this.values[index];
      let swap = null;
      while(true){
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let leftChild,rightChild;
        if(leftChildIndex < arrLen){
          leftChild = this.values[leftChildIndex];
          if(leftChild > element){
            swap = leftChildIndex;
          }
        }
        if(rightChildIndex < arrLen) {
          rightChild = this.values[rightChildIndex];
          if((swap ===null && rightChild > element)|| (swap !== null && rightChild > leftChild)){
            swap = rightChildIndex;
          }
        }
        if(swap === null){
          break;
        } else {
          this.values[index] = this.values[swap];
          this.values[swap] = element;
          index = swap;
        }
      }
    }
  }
  
  let heap = new MaxBinaryHeap();
  heap.insert(41);
  heap.insert(39);
  heap.insert(33);
  heap.insert(18);
  heap.insert(27);
  heap.insert(12);
  heap.insert(55);
  console.log(heap);
  heap.insert(1);
  console.log(heap);
  heap.insert(45);
  console.log(heap);
  heap.insert(199);
  console.log(heap);
  console.log(heap.extractMax());
  console.log(heap);
  console.log(heap.extractMax());
  console.log(heap);
  console.log(heap.extractMax());
  console.log(heap);