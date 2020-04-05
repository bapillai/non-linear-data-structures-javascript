//Priority Queue
//It can be min/max Binary Heap:where root node has min value but highest priority
//Each node has a value and a priority assigned to it
//Since its a PriortyQueue it has enqueue and dequeue method instead of insert and extractMax methods.
//We can add a timestamp to track the insertion order of the siblings,so that we swap the siblings with same priority but different insertion times.
//Binary Heaps are used to implement other data structures like PriortyQueue.We can use array to represent using Binary Heap instead of pointers or left/right properties.

//Time Complexity(Min & Max):
//Insertion & Deletion =>O(nlog(n))
//Seach => O(n) They are not meant for searching,prefer using BST.

//Max Binary Heap - PriortyQueue
class MaxNode{
    constructor(value,priority){
      this.value = value;
      this.priority = priority;
    }
  }
  
  
  class MaxPriortyQueue{
    constructor(){
      this.values = [];
    }
    enqueue(value,priority){
      let newNode = new MaxNode(value,priority);
      this.values.push(newNode);
      this.bubbleUp();
    }
    bubbleUp(){
      let index = this.values.length - 1;
      let element = this.values[index];
      while(index > 0){
        let parentIndex = Math.floor((index - 1)/2);
        let parent = this.values[parentIndex];
        if(element.priority <= parent.priority){
          break;
        }else {
          this.values[parentIndex] = element;
          this.values[index] = parent;
          index = parentIndex;
        }
      }
    }
    dequeue(){
      let maxElt = this.values[0];
      let lastElt = this.values.pop();
      let arrLen = this.values.length;
      if(arrLen > 0){
        this.values[0] = lastElt;
        this.bubbleDown();
      }
      return maxElt;
    }
    bubbleDown(){
      let arrLen = this.values.length;
      let index = 0;
      let element = this.values[index];
      while(true){
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let swap = null;
        let leftChild,rightChild;
        if(leftChildIndex < arrLen){
          leftChild = this.values[leftChildIndex];
          if(leftChild.priority > element.priority){
            swap = leftChildIndex;
          }
        }
        if(rightChildIndex < arrLen){
          rightChild = this.values[rightChildIndex];
          if((swap === null && rightChild.priority > element.priority)||(swap !== null && rightChild.priority > leftChild.priority)){
            swap = rightChildIndex;
          }
        }
        if(swap === null){
          break;
        }else {
          this.values[index] = this.values[swap];
          this.values[swap] = element;
          index = swap;
        }
      }
    }
  }
  
  let ERMax = new MaxPriortyQueue();
  ERMax.enqueue("common cold",1);
  ERMax.enqueue("gunshot wound",5);
  ERMax.enqueue("high fever",2);
  console.log(ERMax);
  console.log(ERMax.dequeue());
  console.log(ERMax.dequeue());
  console.log(ERMax.dequeue());
  
  //Min Binary Heap- PriortyQueue
  class MinNode{
    constructor(value,priority){
      this.value = value;
      this.priority = priority;
    }
  }
  
  
  class MinPriortyQueue{
    constructor(){
      this.values = [];
    }
    enqueue(value,priority){
      let newNode = new MinNode(value,priority);
      this.values.push(newNode);
      this.bubbleUp();
    }
    bubbleUp(){
      let index = this.values.length - 1;
      let element = this.values[index];
      while(index > 0){
        let parentIndex = Math.floor((index - 1)/2);
        let parent = this.values[parentIndex];
        if(element.priority >= parent.priority){
          break;
        }else {
          this.values[parentIndex] = element;
          this.values[index] = parent;
          index = parentIndex;
        }
      }
    }
    dequeue(){
      let maxElt = this.values[0];
      let lastElt = this.values.pop();
      let arrLen = this.values.length;
      if(arrLen > 0){
        this.values[0] = lastElt;
        this.bubbleDown();
      }
      return maxElt;
    }
    bubbleDown(){
      let arrLen = this.values.length;
      let index = 0;
      let element = this.values[index];
      while(true){
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let swap = null;
        let leftChild,rightChild;
        if(leftChildIndex < arrLen){
          leftChild = this.values[leftChildIndex];
          if(leftChild.priority < element.priority){
            swap = leftChildIndex;
          }
        }
        if(rightChildIndex < arrLen){
          rightChild = this.values[rightChildIndex];
          if((swap === null && rightChild.priority < element.priority)||(swap !== null && rightChild.priority < leftChild.priority)){
            swap = rightChildIndex;
          }
        }
        if(swap === null){
          break;
        }else {
          this.values[index] = this.values[swap];
          this.values[swap] = element;
          index = swap;
        }
      }
    }
  }
  
  let ERMin = new MinPriortyQueue();
  ERMin.enqueue("common cold",5);
  ERMin.enqueue("gunshot wound",1);
  ERMin.enqueue("high fever",4);
  ERMin.enqueue("fracture",2);
  ERMin.enqueue("glass in foot",3);
  console.log(ERMin);
  console.log(ERMin.dequeue());
  console.log(ERMin.dequeue());
  console.log(ERMin.dequeue());
  console.log(ERMin.dequeue());
  console.log(ERMin.dequeue());