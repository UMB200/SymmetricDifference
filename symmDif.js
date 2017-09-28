function sym(args) {
  // combine all arrays into on
  var symDifArray = [].slice.call(arguments);
  
  //interate through argumenys and pull all unique values
  function pullSymmDiffValues(acc, next){
    var holderOfUniqueValues =[];
    
    acc.forEach(function(elem){
      if(next.indexOf(elem) <0 && holderOfUniqueValues.indexOf(elem)){
       holderOfUniqueValues.push(elem); 
      }
    } );
    
    next.forEach(function(elem){
     if(acc.indexOf(elem) < 0 && holderOfUniqueValues.indexOf(elem)<0){
       holderOfUniqueValues.push(elem);
     } 
    });
    return holderOfUniqueValues;
  }
  //reduce combined array by pushig all unique values into one
  return symDifArray.reduce(pullSymmDiffValues);
}

sym([1, 2, 3], [5, 2, 1, 4]);
