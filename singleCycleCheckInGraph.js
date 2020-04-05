function singleCycleCheck(array){
    let hasVisitedIndex = 0;
    let currentIndex = 0;
    while(hasVisitedIndex < array.length){
      if(hasVisitedIndex > 0 && currentIndex === 0){
        return false;
      } else{
        hasVisitedIndex++;
        currentIndex = getNextIdx(currentIndex,array);
      }
    }
    return currentIndex === 0;
  }
  
  function getNextIdx(currentIndex,array){
    let jump = array[currentIndex];
    let nextIdx = (jump + currentIndex) % array.length;
    return nextIdx >=0 ? nextIdx : nextIdx + array.length;
  }
  
  singleCycleCheck([2,3,1,-4,-4,2]);