class Sorter {
  constructor() {
    // your implementation
    
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}  

// function REVERSE_COMPARATOR(a, b) {
//   return b - a;
// }  



   this.arr = [];
   this.comparator = compareNumeric;


   




  //  var compType = 
   
  }

  add(element) {
    // your implementation

    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation

//     function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a < b) return -1;
// }

   var indicesSorted = indices.sort(this.comparator);
   var selected = [];
   for(var i = 0; i<indicesSorted.length; i++){
     selected.push(this.arr[indicesSorted[i]]);
   }
   var sorted = selected.sort(this.comparator);
   for(var k = 0; k<sorted.length; k++){
     this.arr[indicesSorted[k]] = sorted[k];
   }

  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;